const SPREADSHEET_ID = '1QW9w1kCqPRgrw_x9DoyBUNdbMQTc-8_cqF_SUXTXL6E';
const TZ = 'Asia/Kuala_Lumpur';

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'health';
  try {
    if (action === 'catalog') return json_(getCatalog_());
    if (action === 'settings') return json_(getSettings_());
    return json_({ok:true, service:'Premium Crest Orders', spreadsheetId:SPREADSHEET_ID});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function doPost(e) {
  try {
    const order = JSON.parse(e.postData.contents || '{}');
    validateOrder_(order);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const orders = ss.getSheetByName('ORDERS');
    const items = ss.getSheetByName('ORDER_ITEMS');
    if (!orders || !items) throw new Error('ORDERS / ORDER_ITEMS sheet missing');

    const createdAt = order.createdAt || new Date().toISOString();
    const customer = order.customer || {};
    const mealItems = (order.items || []).filter(x => x.kind === 'meal');
    const addonItems = (order.items || []).filter(x => x.kind === 'addon');
    const weeks = [...new Set(mealItems.map(x => x.week).filter(Boolean))];
    const days = [...new Set(mealItems.map(x => x.day).filter(Boolean))];
    const meals = [...new Set(mealItems.map(x => x.meal).filter(Boolean))];
    const orderType = customer.orderType || inferOrderType_(mealItems);
    const fulfilment = customer.fulfilment || '';
    const deliveryFee = Number(order.deliveryFee || 0);
    const subtotal = Number(order.subtotal != null ? order.subtotal : order.total || 0);
    const total = Number(order.total || subtotal + deliveryFee);

    orders.appendRow([
      order.orderId,
      createdAt,
      customer.name || '',
      customer.phone || '',
      orderType,
      weeks.length === 1 ? weeks[0] : (weeks.length ? weeks.join(',') : ''),
      customer.serviceDate || '',
      days.length === 1 ? days[0] : (days.length ? days.join(',') : ''),
      meals.length === 1 ? meals[0] : (meals.length ? 'Multiple' : ''),
      mealItems.length,
      subtotal,
      deliveryFee,
      total,
      customer.payment || '',
      customer.paymentRef || '',
      fulfilment,
      customer.address || '',
      customer.remarks || '',
      'New',
      false
    ]);

    (order.items || []).forEach(x => {
      if (x.kind === 'meal') {
        (x.items || []).forEach(i => {
          const qty = Number(i.qty || 1);
          let unitPrice = 0;
          // Meal dish unit price is tracked as 0 because set pricing is stored on the parent meal.
          items.appendRow([
            order.orderId, x.week || '', x.day || '', titleCase_(x.meal || ''),
            i.type === 'meat' ? 'Meat' : 'Vegetable', i.no || '', i.zh || '', i.en || '',
            qty, unitPrice, unitPrice * qty
          ]);
        });
      } else if (x.kind === 'addon') {
        const qty = Number(x.qty || 1);
        const unitPrice = Number(x.price || 0);
        items.appendRow([
          order.orderId, '', '', '', 'Add-on', x.id || '', x.zh || x.name || '', x.en || x.name || '',
          qty, unitPrice, unitPrice * qty
        ]);
      }
    });

    SpreadsheetApp.flush();
    return json_({ok:true,orderId:order.orderId,total:total});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function getCatalog_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const menuSh = ss.getSheetByName('MENU');
  const addonsSh = ss.getSheetByName('ADDONS');
  const menu = rowsAsObjects_(menuSh).filter(r => truthy_(r['Available']));
  const addons = rowsAsObjects_(addonsSh).filter(r => truthy_(r['Available']));
  return {ok:true, menu:menu, addons:addons, settings:getSettings_().settings};
}

function getSettings_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName('SETTINGS');
  const values = sh.getDataRange().getValues();
  const settings = {};
  for (let i=1;i<values.length;i++) {
    if (values[i][0]) settings[String(values[i][0])] = values[i][1];
  }
  return {ok:true,settings:settings};
}

function rowsAsObjects_(sh) {
  if (!sh) return [];
  const values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0].map(String);
  return values.slice(1).filter(r => r.some(v => v !== '')).map(r => {
    const o = {};
    headers.forEach((h,i) => o[h] = r[i]);
    return o;
  });
}

function inferOrderType_(mealItems) {
  if (mealItems.length <= 1) return 'Single Meal';
  const days = new Set(mealItems.map(x=>x.day));
  return days.size > 1 ? 'Weekly' : 'Full Day';
}

function validateOrder_(order) {
  if (!order || !order.orderId) throw new Error('Missing orderId');
  if (!order.customer || !order.customer.name || !order.customer.phone) throw new Error('Name and phone are required');
  if (!Array.isArray(order.items) || !order.items.length) throw new Error('Order is empty');
}

function titleCase_(s) {
  return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1).toLowerCase();
}

function truthy_(v) {
  return v === true || String(v).toUpperCase() === 'TRUE' || String(v) === '1';
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// 可手动执行来测试 Google Sheet 是否可写。
function testConnection() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName('SETTINGS');
  if (!sh) throw new Error('SETTINGS sheet not found');
  Logger.log('Connected: ' + ss.getName());
}
