const CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbypZeSwTKE4Br6wCu3d-CHtmyjo0mrwMSh-YV_ASYZ287TP7ksdBe9LjKTgc7fjdj4I/exec",
  currency: "RM",
  kitchenAddress: "1608, Lorong Urat Mata 3, Tabuan Jaya, 93350 Kuching, Sarawak"
};

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const DAY_ZH = {Monday:"星期一",Tuesday:"星期二",Wednesday:"星期三",Thursday:"星期四",Friday:"星期五"};
const DAY_MS = {Monday:"Isnin",Tuesday:"Selasa",Wednesday:"Rabu",Thursday:"Khamis",Friday:"Jumaat"};

const I18N = {
  zh:{
    headerTitle:"在线点餐",headerSubtitle:"自由选餐 · 自动算价 · 早餐午餐 · 可订整周",cart:"购物车",heroTitle:"直接点进去就可以下单 🍱",heroText:"选好取餐／配送日期，系统自动显示正确的菜单 Week 和星期。选择早餐或午餐，再点选食物即可。",set1:"1肉2菜",set2:"2肉1菜",weekLabel:"星期菜单",dayLabel:"日期",mealLabel:"餐别",breakfast:"早餐",lunch:"午餐",chooseFood:"自由选择食物",clear:"清除选择",mealSummary:"本餐选择",addMeal:"加入购物车",minHint:"提示：至少需要 1肉2菜 或 2肉1菜 才能加入购物车。",addons:"单点加购",addonsHint:"可在结账前随时添加",close:"关闭",total:"总计",customerDetails:"顾客资料",name:"姓名",phone:"电话号码",fulfilment:"取餐方式",address:"地址",payment:"付款方式",paymentRef:"付款参考号",remarks:"备注",placeOrder:"确认下单",noFood:"还没有选择食物",meat:"肉类",veg:"菜类",meatShort:"肉",vegShort:"菜",extraMeat:"加肉",extraVeg:"加菜",mealTotal:"本餐合计",selected:"已选",needSet:"请选择至少 1肉2菜 或 2肉1菜",emptyCart:"购物车目前是空的。",remove:"删除",addonCart:"单点加购",selfPickup:"Self Pickup / 自取",delivery:"Delivery / 送餐",duitnow:"DuitNow QR",bank:"Bank Transfer",cash:"Cash",remarksPlaceholder:"少辣 / 不辣 / 少饭 ...",cartEmptyAlert:"购物车是空的",submitting:"提交中…",submitted:"✅ 已提交",success:"✅ 下单成功",doNotRepeat:"请勿重复点击提交。如需再下单，请重新加入餐点。",submitFail:"订单提交失败，请检查 Apps Script URL 或网络连接。",demoNote:"目前是 Demo 模式：订单已存放在此浏览器。接上 Google Apps Script 后会自动写入 Google Sheets。",week:"第{n}周",set2label:"2肉1菜",set1label:"1肉2菜"
  },
  en:{
    headerTitle:"Online Ordering",headerSubtitle:"Choose freely · Auto pricing · Breakfast & lunch · Weekly orders",cart:"Cart",heroTitle:"Order directly online 🍱",heroText:"Choose a pickup/delivery date. The correct menu week and weekday appear automatically. Pick your meal and food.",set1:"1 Meat + 2 Vegetables",set2:"2 Meats + 1 Vegetable",weekLabel:"Menu Week",dayLabel:"Day",mealLabel:"Meal",breakfast:"Breakfast",lunch:"Lunch",chooseFood:"Choose Your Food",clear:"Clear Selection",mealSummary:"Meal Summary",addMeal:"Add Meal to Cart",minHint:"Choose at least 1 meat + 2 vegetables or 2 meats + 1 vegetable before adding to cart.",addons:"À La Carte Add-ons",addonsHint:"You can add these any time before checkout",close:"Close",total:"Total",customerDetails:"Customer Details",name:"Name",phone:"Phone",fulfilment:"Fulfilment",address:"Address",payment:"Payment Method",paymentRef:"Payment Reference",remarks:"Remarks",placeOrder:"Place Order",noFood:"No food selected yet",meat:"Meat",veg:"Vegetable",meatShort:"Meat",vegShort:"Veg",extraMeat:"Extra Meat",extraVeg:"Extra Vegetable",mealTotal:"Meal Total",selected:"Selected",needSet:"Choose at least 1 meat + 2 vegetables or 2 meats + 1 vegetable",emptyCart:"Your cart is empty.",remove:"Remove",addonCart:"Add-on",selfPickup:"Self Pickup",delivery:"Delivery",duitnow:"DuitNow QR",bank:"Bank Transfer",cash:"Cash",remarksPlaceholder:"Less spicy / No chili / Less rice ...",cartEmptyAlert:"Your cart is empty",submitting:"Submitting…",submitted:"✅ Order Submitted",success:"✅ Order Confirmed",doNotRepeat:"Please do not submit the same order twice. Add new items if you want to place another order.",submitFail:"Order submission failed. Please check your connection and try again.",demoNote:"Demo mode: this order is stored in this browser only.",week:"Week {n}",set2label:"2 Meats + 1 Vegetable",set1label:"1 Meat + 2 Vegetables"
  },
  ms:{
    headerTitle:"Pesanan Dalam Talian",headerSubtitle:"Pilih bebas · Harga automatik · Sarapan & makan tengah hari · Tempahan mingguan",cart:"Troli",heroTitle:"Terus buat pesanan di sini 🍱",heroText:"Pilih tarikh ambil atau penghantaran. Minggu menu dan hari dipadankan secara automatik. Kemudian pilih hidangan.",set1:"1 Daging + 2 Sayur",set2:"2 Daging + 1 Sayur",weekLabel:"Minggu Menu",dayLabel:"Hari",mealLabel:"Waktu Makan",breakfast:"Sarapan",lunch:"Makan Tengah Hari",chooseFood:"Pilih Makanan",clear:"Kosongkan Pilihan",mealSummary:"Ringkasan Hidangan",addMeal:"Tambah ke Troli",minHint:"Pilih sekurang-kurangnya 1 daging + 2 sayur atau 2 daging + 1 sayur sebelum tambah ke troli.",addons:"Tambahan À La Carte",addonsHint:"Boleh ditambah bila-bila masa sebelum pembayaran",close:"Tutup",total:"Jumlah",customerDetails:"Maklumat Pelanggan",name:"Nama",phone:"Nombor Telefon",fulfilment:"Kaedah Ambil",address:"Alamat",payment:"Kaedah Bayaran",paymentRef:"Rujukan Bayaran",remarks:"Catatan",placeOrder:"Sahkan Pesanan",noFood:"Belum pilih makanan",meat:"Daging",veg:"Sayur",meatShort:"Daging",vegShort:"Sayur",extraMeat:"Tambah Daging",extraVeg:"Tambah Sayur",mealTotal:"Jumlah Hidangan",selected:"Dipilih",needSet:"Pilih sekurang-kurangnya 1 daging + 2 sayur atau 2 daging + 1 sayur",emptyCart:"Troli anda masih kosong.",remove:"Buang",addonCart:"Tambahan",selfPickup:"Ambil Sendiri",delivery:"Penghantaran",duitnow:"DuitNow QR",bank:"Pindahan Bank",cash:"Tunai",remarksPlaceholder:"Kurang pedas / Tanpa cili / Kurang nasi ...",cartEmptyAlert:"Troli anda kosong",submitting:"Menghantar…",submitted:"✅ Telah Dihantar",success:"✅ Pesanan Disahkan",doNotRepeat:"Jangan hantar pesanan yang sama dua kali. Tambah item baharu jika mahu membuat pesanan lain.",submitFail:"Pesanan gagal dihantar. Sila semak sambungan dan cuba lagi.",demoNote:"Mod demo: pesanan ini hanya disimpan dalam pelayar ini.",week:"Minggu {n}",set2label:"2 Daging + 1 Sayur",set1label:"1 Daging + 2 Sayur"
  }
};

const DELIVERY_I18N = {
  zh: {origin:'出餐地点',deliveryInfo:'送餐运费（单程行车距离）',distance:'实际行车距离',tripCount:'配送次数',deliveryFee:'送餐费',subtotal:'餐费',containerFee:'餐盒费',grandTotal:'应付总额',calculate:'计算送餐费',calculating:'正在查询行车距离…',needAddress:'请输入完整送餐地址，再计算运费。',confirmAddress:'请确认系统找到的送餐地点正确',tooFar:'超过 10 km：请联系客服报价，暂时不能线上结账。',quoteFail:'无法查询准确行车距离。请检查地址或联系客服；不会自动收取估算运费。',quoteFirst:'请先计算并确认送餐距离，才可以提交订单。',tripInfo:'同一天早餐、午餐可选择分别配送或一次送达；按实际配送次数收费。',chooseMode:'请选择配送方式',separate:'分别配送：早餐、午餐各送一次',together:'合并配送：同一天两餐同时送达，运费只收一次',togetherTime:'合并配送的送达时段',morning:'早餐时段一起送达',midday:'午餐时段一起送达',jointWarning:'选合并配送后，两餐将在同一时段送达；不会分别送两次。',noJoint:'购物车里没有同一天的早餐＋午餐；每个订餐日只计一次配送。',dayTrips:'配送明细',addonOnly:'只有单点加购：收一次送餐费',pickupFree:'自取免费',addressChanged:'地址或餐点已更改，请重新计算运费。',pending:'正在确认服务器是否收到订单…',unverified:'订单已送出，但暂时无法确认是否成功。请先检查订单表或联系客服，不要重复提交。'},
  en: {origin:'Kitchen',deliveryInfo:'Delivery fee (one-way driving distance)',distance:'Driving distance',tripCount:'Delivery trips',deliveryFee:'Delivery fee',subtotal:'Food subtotal',containerFee:'Container fee',grandTotal:'Grand total',calculate:'Calculate delivery',calculating:'Calculating route…',needAddress:'Please enter the complete delivery address.',confirmAddress:'Please verify this matched address',tooFar:'Over 10 km: contact us for a quote. Online checkout is unavailable.',quoteFail:'Could not determine a reliable driving distance. Check the address or contact us. No estimated fee will be charged.',quoteFirst:'Calculate and confirm the delivery distance before placing an order.',tripInfo:'Choose separate drop-offs or one combined drop-off for breakfast and lunch on the same day.',chooseMode:'Choose your delivery arrangement',separate:'Separate delivery: breakfast and lunch delivered separately',together:'Combined delivery: same-day breakfast and lunch delivered together, one fee',togetherTime:'Combined drop-off time',morning:'Deliver both at breakfast time',midday:'Deliver both at lunch time',jointWarning:'Both meals arrive at the same time; there will not be separate morning and midday drop-offs.',noJoint:'No breakfast-and-lunch pair on the same day. Each ordered day needs only one trip.',dayTrips:'Trip breakdown',addonOnly:'Add-ons only: one delivery trip',pickupFree:'Free pickup',addressChanged:'Address or meals changed. Please recalculate delivery.',pending:'Checking whether the server received your order…',unverified:'Order sent, but receipt could not be verified. Check the order sheet or contact us before trying again.'},
  ms: {origin:'Dapur',deliveryInfo:'Caj penghantaran (jarak memandu sehala)',distance:'Jarak memandu',tripCount:'Bilangan penghantaran',deliveryFee:'Caj penghantaran',subtotal:'Jumlah makanan',containerFee:'Caj bekas',grandTotal:'Jumlah keseluruhan',calculate:'Kira caj penghantaran',calculating:'Mengira laluan…',needAddress:'Masukkan alamat penghantaran yang lengkap.',confirmAddress:'Sila sahkan alamat yang ditemui',tooFar:'Lebih 10 km: hubungi kami untuk sebut harga. Bayaran dalam talian tidak tersedia.',quoteFail:'Jarak memandu tidak dapat ditentukan. Semak alamat atau hubungi kami. Caj anggaran tidak dikenakan.',quoteFirst:'Kira dan sahkan jarak sebelum membuat pesanan.',tripInfo:'Pilih penghantaran berasingan atau sekali hantar untuk sarapan dan makan tengah hari pada hari sama.',chooseMode:'Pilih cara penghantaran',separate:'Asing: sarapan dan makan tengah hari dihantar berasingan',together:'Gabung: kedua-dua hidangan hari sama dihantar sekali, satu caj sahaja',togetherTime:'Masa penghantaran gabungan',morning:'Hantar kedua-duanya waktu sarapan',midday:'Hantar kedua-duanya waktu makan tengah hari',jointWarning:'Kedua-dua hidangan tiba serentak; tiada penghantaran berasingan.',noJoint:'Tiada pasangan sarapan dan makan tengah hari pada hari yang sama. Satu penghantaran setiap hari.',dayTrips:'Butiran penghantaran',addonOnly:'Tambahan sahaja: satu caj penghantaran',pickupFree:'Ambil sendiri percuma',addressChanged:'Alamat atau hidangan berubah. Sila kira semula caj penghantaran.',pending:'Menyemak sama ada pelayan menerima pesanan…',unverified:'Pesanan dihantar tetapi pengesahan belum diterima. Semak rekod pesanan atau hubungi kami sebelum mencuba lagi.'}
};
const dt = key => (DELIVERY_I18N[lang] || DELIVERY_I18N.zh)[key] || key;
const WEEKLY_I18N={
 zh:{modeHeading:'选择点餐方式',singleMode:'单餐 / 单日',weeklyMode:'整周一起点餐（星期一至五）',plannerTitle:'一次选择整周早餐和午餐',plannerHint:'每天早餐及午餐自由选菜，不需要的餐点可取消勾选；全部选好后，只提交一次订单。',weeklyMenu:'菜单周（按日期自动匹配）',startDate:'配送周星期一的日期',selectAll:'全选 10 餐',breakfastOnly:'仅订早餐',lunchOnly:'仅订午餐',clearWeek:'全部取消',draftSaved:'每餐选择会自动保存，可在提交前修改。',weeklySubtotal:'本周餐费（不含单点及运费）',reviewWeek:'查看整周购物车并结账',pendingMeal:'尚未选好',doneMeal:'✓ 已完成',skipMeal:'不订此餐',weeklyReady:'已选好 {done}/{active} 餐',weeklyNone:'请至少选择一餐',weeklyIncomplete:'尚有 {n} 餐未选好，请先完成或取消勾选。',weeklyChanged:'切换配送周会从购物车移除上一周的整周餐点，继续吗？',weeklyInvalidDate:'请选择本周或之后的星期一；过去的餐点不可订。',weeklyOtherCart:'注意：购物车里已有其他餐点或单点商品，结账时会一起计算。',weeklyTotal10:'全周 10 餐',weeklySingleLabel:'本餐',weeklyOtherWarning:'餐点将自动加入购物车；取消勾选即从购物车移除。',singleDate:'实际取餐／送餐日期',singleDateWeekend:'只提供星期一至星期五，请选择工作日。',singleDatePast:'请选择今天或之后的日期。',singleDateDifferentWeek:'购物车里已有其他配送周的餐点，请先结账或清空购物车。'},
 en:{modeHeading:'How would you like to order?',singleMode:'Single meal / one day',weeklyMode:'Choose an entire week (Mon–Fri)',plannerTitle:'Plan all breakfasts and lunches in one go',plannerHint:'Choose each breakfast and lunch separately. Untick anything you do not need, then place one order for the entire week.',weeklyMenu:'Menu week (automatic)',startDate:'Monday of the delivery week',selectAll:'Select all 10 meals',breakfastOnly:'Breakfast only',lunchOnly:'Lunch only',clearWeek:'Clear all',draftSaved:'Selections are saved automatically until checkout.',weeklySubtotal:'Weekly food total (excl. add-ons/delivery)',reviewWeek:'Review weekly cart and checkout',pendingMeal:'Incomplete',doneMeal:'✓ Ready',skipMeal:'Skip this meal',weeklyReady:'Completed {done}/{active} meals',weeklyNone:'Select at least one meal',weeklyIncomplete:'Please finish or untick the remaining {n} meals.',weeklyChanged:'Switching the delivery week removes the previous weekly meals from your cart. Continue?',weeklyInvalidDate:'Select this Monday or a future Monday. Past meals cannot be ordered.',weeklyOtherCart:'Other meals and add-ons in your cart are included at checkout.',weeklyTotal10:'10 meals for the week',weeklySingleLabel:'This meal',weeklyOtherWarning:'Finished meals are added to your cart automatically; untick to remove.',singleDate:'Pickup / delivery date',singleDateWeekend:'Select a weekday from Monday to Friday.',singleDatePast:'Please choose today or a future date.',singleDateDifferentWeek:'Your cart contains meals from a different service week. Place that order first or clear your cart for accurate delivery pricing.'},
 ms:{modeHeading:'Pilih cara tempahan',singleMode:'Satu hidangan / satu hari',weeklyMode:'Tempah seminggu terus (Isnin–Jumaat)',plannerTitle:'Pilih semua sarapan dan makan tengah hari sekaligus',plannerHint:'Pilih setiap hidangan secara berasingan. Nyah tanda makanan yang tidak diperlukan, kemudian hantar satu pesanan untuk seminggu.',weeklyMenu:'Minggu menu (automatik)',startDate:'Tarikh Isnin bagi minggu penghantaran',selectAll:'Pilih kesemua 10 hidangan',breakfastOnly:'Sarapan sahaja',lunchOnly:'Makan tengah hari sahaja',clearWeek:'Batalkan semua',draftSaved:'Pilihan disimpan secara automatik sehingga pembayaran.',weeklySubtotal:'Jumlah makanan mingguan (tidak termasuk tambahan/penghantaran)',reviewWeek:'Semak troli mingguan dan bayar',pendingMeal:'Belum lengkap',doneMeal:'✓ Lengkap',skipMeal:'Langkau hidangan',weeklyReady:'Selesai {done}/{active} hidangan',weeklyNone:'Pilih sekurang-kurangnya satu hidangan',weeklyIncomplete:'Sila lengkapkan atau nyah tanda {n} hidangan yang berbaki.',weeklyChanged:'Menukar minggu akan membuang hidangan mingguan lama daripada troli. Teruskan?',weeklyInvalidDate:'Pilih Isnin minggu ini atau akan datang. Hidangan lalu tidak boleh ditempah.',weeklyOtherCart:'Hidangan dan tambahan lain dalam troli turut dikira semasa pembayaran.',weeklyTotal10:'10 hidangan seminggu',weeklySingleLabel:'Hidangan ini',weeklyOtherWarning:'Hidangan yang lengkap masuk troli secara automatik; nyah tanda untuk membuang.',singleDate:'Tarikh ambil / penghantaran',singleDateWeekend:'Sila pilih Isnin hingga Jumaat.',singleDatePast:'Pilih hari ini atau tarikh akan datang.',singleDateDifferentWeek:'Troli mengandungi hidangan daripada minggu lain. Hantar pesanan itu dahulu atau kosongkan troli untuk kiraan penghantaran yang betul.'}
};
const wt=key=>((WEEKLY_I18N[lang]||WEEKLY_I18N.zh)[key]||key);
const ADDON_I18N={
  zh:{title:'按日期选择单点加购',hint:'星期一至星期五每天都可以独立选择单点。',delivery:'当天 Add-on 配送',withBreakfast:'跟当天早餐一起送',withLunch:'跟当天午餐一起送',separate:'单独配送',noMeal:'当天没有 Meal，Add-on 会单独配送。',pickup:'自取订单会按所选日期准备；配送选项只在选择送餐时影响运费。',date:'加购日期',linked:'配送安排',deadline:'Add-on 同样受数量预订截止时间限制。',differentWeek:'购物车已有其他配送周，请先结账或清空购物车。'},
  en:{title:'Choose add-ons by date',hint:'Add à la carte items independently for each Monday–Friday service date.',delivery:'Add-on delivery for this day',withBreakfast:'Send with this day’s breakfast',withLunch:'Send with this day’s lunch',separate:'Separate delivery',noMeal:'There is no Meal on this date, so add-ons will be delivered separately.',pickup:'For pickup, items are prepared for the selected date. Delivery choice only affects delivery orders.',date:'Add-on date',linked:'Delivery arrangement',deadline:'Add-ons follow the same quantity-based order deadline.',differentWeek:'Your cart already contains another service week. Checkout or clear it first.'},
  ms:{title:'Pilih tambahan mengikut tarikh',hint:'Pilih item à la carte secara berasingan untuk setiap Isnin–Jumaat.',delivery:'Penghantaran tambahan hari ini',withBreakfast:'Hantar bersama sarapan hari ini',withLunch:'Hantar bersama makan tengah hari hari ini',separate:'Penghantaran berasingan',noMeal:'Tiada Meal pada tarikh ini, jadi tambahan dihantar secara berasingan.',pickup:'Untuk ambil sendiri, item disediakan pada tarikh dipilih. Pilihan penghantaran hanya menjejaskan caj penghantaran.',date:'Tarikh tambahan',linked:'Susunan penghantaran',deadline:'Tambahan menggunakan tarikh akhir tempahan mengikut kuantiti yang sama.',differentWeek:'Troli sudah mengandungi minggu penghantaran lain. Sila bayar atau kosongkan troli dahulu.'}
};
const at=key=>((ADDON_I18N[lang]||ADDON_I18N.zh)[key]||key);

let lang = localStorage.getItem("pc_lang") || "zh";
let data, state = {week:1, day:"Monday", meal:"breakfast", selected:new Set(), addons:{}};
let cart = JSON.parse(localStorage.getItem("pc_cart") || "[]");
let isSubmitting = false;
let deliveryQuote = null;
let quoteBusy = false;
let quoteEpoch = 0;
let weeklyMode = false;
let weeklyMonday = PCCalendar.initialWeeklyMonday();
let weeklyDrafts = null;
let weeklyPlanId = '';
let singleDateIso='';
let singleDateManuallyChosen=false;
let addonPlannerDay='Monday';
let addonDeliveryDraft={};
const MAX_ORDER_QTY=1000;
let CONTAINER_FEE_PER_PORTION=1.00;
let CONTAINER_FEE_FRIED_CHICKEN=0.50;
let DELIVERY_RATE_0_5=5.00;
let DELIVERY_RATE_5_10=9.00;
const qtyLabel=()=>({zh:"数量（1–1000份）",en:"Quantity (1–1000)",ms:"Kuantiti (1–1000)"}[lang]||"Qty");
const readQty=v=>{const n=Number(v);return Number.isInteger(n)&&n>=1&&n<=MAX_ORDER_QTY?n:null;};
function syncQtyLabels(){document.querySelectorAll("[data-qty-label]").forEach(el=>el.textContent=qtyLabel());}

const ISO_DATE=/^\d{4}-\d{2}-\d{2}$/;

// Booking policy: calendar days before service, 14:00 Asia/Kuala_Lumpur.
// Each meal line has its own quantity; mixed weekly orders check each service day.
const BOOKING_POLICY=[{min:1,max:50,days:1},{min:51,max:100,days:2},{min:101,max:500,days:3},{min:501,max:1000,days:5}];
const bookingText=key=>({
 zh:{title:'最迟下单时间（马来西亚时间）',normal:'1–50份：提前1天，下午2点前',fifty:'51–100份：提前2天，下午2点前',hundred:'101–500份：提前3天，下午2点前',threehundred:'501–1000份：提前5天，下午2点前',last:'最迟下单：',expired:'已超过最迟下单时间。请更改送餐日期或数量。',invalid:'请选择1–1000份。',now:'截止日期已过',notice:'以上为日历天；星期六、日也计入预订天数。',addon:'单点加购请选择具体日期；数量同样使用以上截止规则。'},
 en:{title:'Last order deadlines (Malaysia time)',normal:'1–50: 1 calendar day ahead, by 2 pm',fifty:'51–100: 2 calendar days ahead, by 2 pm',hundred:'101–500: 3 calendar days ahead, by 2 pm',threehundred:'501–1000: 5 calendar days ahead, by 2 pm',last:'Last order: ',expired:'Order deadline passed. Change the service date or quantity.',invalid:'Choose 1–1000 portions.',now:'Deadline passed',notice:'Calendar days include weekends.',addon:'Choose a service date for every add-on. The same quantity-based deadlines apply.'},
 ms:{title:'Tarikh akhir tempahan (waktu Malaysia)',normal:'1–50: 1 hari kalendar lebih awal, sebelum 2 ptg',fifty:'51–100: 2 hari kalendar lebih awal, sebelum 2 ptg',hundred:'101–500: 3 hari lebih awal, sebelum 2 ptg',threehundred:'501–1000: 5 hari lebih awal, sebelum 2 ptg',last:'Tempahan akhir: ',expired:'Masa tempahan tamat. Tukar tarikh atau kuantiti.',invalid:'Pilih 1–1000 hidangan.',now:'Tarikh akhir telah berlalu',notice:'Hari kalendar termasuk hujung minggu.',addon:'Pilih tarikh untuk setiap tambahan. Tarikh akhir mengikut kuantiti yang sama.'}
}[lang]||{})[key]||key;
function malaysiaNowStamp(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kuala_Lumpur',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
 return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}
function bookingDeadline(serviceDate,qty){
 const n=readQty(qty),policy=BOOKING_POLICY.find(p=>n>=p.min&&n<=p.max);
 if(!policy||!ISO_DATE.test(String(serviceDate)))return null;
 const time=new Date(`${serviceDate}T12:00:00Z`);
 if(Number.isNaN(+time)||time.toISOString().slice(0,10)!==serviceDate)return null;
 time.setUTCDate(time.getUTCDate()-policy.days);
 return `${time.toISOString().slice(0,10)}T14:00`;
}
function bookingValid(serviceDate,qty,now=new Date()){
 const cutoff=bookingDeadline(serviceDate,qty);
 return cutoff!==null && malaysiaNowStamp(now)<cutoff;
}
function showDeadline(serviceDate,qty){
 const cutoff=bookingDeadline(serviceDate,qty);if(!cutoff)return bookingText('invalid');
 const date=cutoff.slice(0,10),isValid=bookingValid(serviceDate,qty);
 return `${bookingText('last')}${date} 14:00 MYT${isValid?'':' · '+bookingText('now')}`;
}
function refreshBookingNotices(){
 const policy=document.querySelector('#bookingPolicy');
 if(policy)policy.innerHTML=`<strong>${bookingText('title')}</strong><br>${['normal','fifty','hundred','threehundred'].map(x=>bookingText(x)).join('<br>')}<br><small>${bookingText('notice')}</small>`;
 const hint=document.querySelector('#singleDeadlineHint');
 if(hint){const qty=readQty(document.querySelector('#singleQty')?.value);hint.textContent=showDeadline(singleDateIso,qty);hint.classList.toggle('deadline-expired',!!qty&&!bookingValid(singleDateIso,qty));}
 const addBtn=document.querySelector('#addMealBtn');if(addBtn && data){const qty=readQty(document.querySelector('#singleQty')?.value);if(!qty||!bookingValid(singleDateIso,qty))addBtn.disabled=true;}
 const checkout=document.querySelector('#checkoutDeadlineHint');if(checkout){const invalid=cart.filter(x=>x.serviceDate&&!bookingValid(x.serviceDate,x.qty||1));checkout.textContent=invalid.length?`${bookingText('expired')} ${invalid.map(x=>`${x.serviceDate} × ${x.qty||1}`).join(' · ')}`:'';checkout.classList.toggle('deadline-expired',invalid.length>0);}
}

function dateLocal(iso){
  if(!ISO_DATE.test(iso))return null;
  const [y,m,d]=iso.split('-').map(Number),v=new Date(y,m-1,d,12);
  return v.getFullYear()===y&&v.getMonth()===m-1&&v.getDate()===d?v:null;
}
function isoLocal(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-')}
function nextServiceDate(from=new Date()){return PCCalendar.initialSingleDate(from);}
function mondayFrom(iso){return PCCalendar.mondayOf(iso);}
function orderWeeks(){return new Set(cart.filter(x=>x.serviceDate).map(x=>mondayFrom(x.serviceDate)))}


const QUOTE_TIMEOUT_MS = 18000;


const $ = s => document.querySelector(s);
const money = n => `${CONFIG.currency}${Number(n).toFixed(2)}`;
const t = (key, vars={}) => {
  let text=(I18N[lang]&&I18N[lang][key])||I18N.zh[key]||key;
  Object.entries(vars).forEach(([k,v])=>text=text.replaceAll(`{${k}}`,v));
  return text;
};

async function init(){
  data = await fetch("data/menu.json").then(r=>r.json());
  loadRuntimeSettings(); // Non-blocking: Sheet CONTAINER_FEE can update the displayed RM/box.
  $("#languageSelect").value=lang;
  $("#languageSelect").onchange=e=>setLanguage(e.target.value);
  singleDateIso=nextServiceDate();
  $('#singleDate').min=PCCalendar.nowInMalaysia().date;
  $('#singleDate').max=PCCalendar.addDays(PCCalendar.nowInMalaysia().date,90);
  $('#singleDate').value=singleDateIso;
  state.day=PCCalendar.weekday(singleDateIso);
  state.week=PCCalendar.menuWeek(singleDateIso);
  state.meal=PCCalendar.initialMeal(singleDateIso);
  document.querySelectorAll('.meal-tab').forEach(b=>b.classList.toggle('active',b.dataset.meal===state.meal));
  fillSelectors(); renderAddons(); applyLanguage(); renderMeal(); updateCart();
  $('#singleDate').onchange=e=>{
    const chosen=dateLocal(e.target.value),today=PCCalendar.nowInMalaysia().date;
    if(!chosen||e.target.value<today){
      alert(wt('singleDatePast'));e.target.value=singleDateIso;return;
    }
    if(chosen.getDay()===0||chosen.getDay()===6){
      alert(wt('singleDateWeekend'));e.target.value=singleDateIso;return;
    }
    singleDateManuallyChosen=true;
    singleDateIso=e.target.value;state.day=PCCalendar.weekday(singleDateIso);
    state.week=PCCalendar.menuWeek(singleDateIso);
    state.selected.clear();fillSelectors();renderMeal();renderAddons();renderCalendarHints();refreshBookingNotices();
  };
  $('#singleModeBtn').onclick=()=>switchOrderMode(false);
  $('#weeklyModeBtn').onclick=()=>switchOrderMode(true);
  $('#weeklyMonday').onchange=e=>changeWeeklyPlan(e.target.value);
  document.querySelectorAll('[data-weekly-preset]').forEach(b=>b.onclick=()=>setWeeklyPreset(b.dataset.weeklyPreset));
  $('#weeklyGrid').addEventListener('click',weeklyGridClick);
  $('#weeklyGrid').addEventListener('change',weeklyGridChange);
  $('#weeklyReview').onclick=()=>{if(checkWeeklyReady())showCart();};
  const retained=cart.find(x=>x.kind==='meal'&&x.weeklyPlanId&&/^W[1-5]@\d{4}-\d{2}-\d{2}$/.test(x.weeklyPlanId));
  if(retained){weeklyMonday=retained.weeklyPlanId.split('@')[1];}
  $('#weeklyMonday').min=PCCalendar.mondayOf(PCCalendar.nowInMalaysia().date);
  $('#weeklyMonday').value=weeklyMonday;
  loadWeeklyDraft();applyWeeklyLanguage();
  migrateLegacyAddons();renderAddons();

  document.querySelectorAll(".meal-tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".meal-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.meal=b.dataset.meal;state.selected.clear();renderMeal();});
  $("#clearMeal").onclick=()=>{state.selected.clear();renderMeal()};
  $("#addMealBtn").onclick=addCurrentMeal;
  $("#singleQty").addEventListener("input",()=>renderSummary());
  $("#weeklyGrid").addEventListener("input",weeklyQtyInput);
  $("#clearStaleCart").onclick=()=>{cart=cart.filter(x=>!invalidCartMeal(x));persistCart();resetSubmitButton();};
  $("#cartBtn").onclick=showCart; $("#closeCart").onclick=()=>$("#cartSection").classList.add("hidden");
  $("#checkoutForm").onsubmit=placeOrder;
  $("#fulfilmentSelect").onchange=() => {invalidateDelivery(); renderDeliverySection(); renderAddons();};
  const addressField=document.querySelector('[name="address"]');
  addressField.addEventListener('input',invalidateDelivery);
  addressField.addEventListener('blur',()=>{if(isDelivery() && addressField.value.trim().length>=12 && cart.length) calculateDelivery();});
  document.querySelectorAll('input[name="deliveryMode"]').forEach(el=>el.addEventListener('change',()=>{invalidateDelivery();renderDeliverySection();}));
  $("#jointTime").addEventListener('change',()=>{invalidateDelivery();renderDeliverySection();});
  $("#calculateDelivery").onclick=calculateDelivery;
  renderDeliverySection();
  $("#paymentSelect").addEventListener('change', renderPaymentInfo);
  renderPaymentInfo();
  renderCalendarHints();
  syncQtyLabels();refreshBookingNotices();
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshCalendarDate();});
  window.setInterval(refreshCalendarDate,60000);
}

function setLanguage(newLang){
  lang=newLang;localStorage.setItem("pc_lang",lang);applyLanguage();fillSelectors();renderMeal();renderAddons();updateCart();applyWeeklyLanguage();renderWeeklyPlanner();renderCalendarHints();syncQtyLabels();refreshBookingNotices();
}
function applyLanguage(){
  document.documentElement.lang=lang==='zh'?'zh-Hans':lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $("#remarksField").placeholder=t("remarksPlaceholder");
  const oldFulfilment=$("#fulfilmentSelect").value;
  $("#fulfilmentSelect").innerHTML=`<option value="Self Pickup / 自取">${t('selfPickup')}</option><option value="Delivery / 送餐">${t('delivery')}</option>`;
  if(oldFulfilment)$("#fulfilmentSelect").value=oldFulfilment;
  const oldPayment=$("#paymentSelect").value;
  $("#paymentSelect").innerHTML=`<option value="DuitNow QR">${t('duitnow')}</option><option value="Bank Transfer">${t('bank')}</option><option value="Cash">${t('cash')}</option>`;
  if(oldPayment)$("#paymentSelect").value=oldPayment;
  if(!paymentReady($("#paymentSelect").value))$("#paymentSelect").value=["DuitNow QR","Bank Transfer","Cash"].find(paymentReady)||"Cash";
  renderPaymentInfo();
  resetSubmitButton(false);
  renderDeliverySection();
}
/* v1.7: public merchant payment information, NOT an automatic payment gateway. */
const PAYMENT_TEXT = {
  zh:{qrTitle:'扫描 DuitNow QR 付款',bankTitle:'银行转账资料',notReady:'商家尚未上传此付款方式，请选择其他方式或联系客服。',manual:'付款后请填写付款参考号。订单须由商家人工核对付款，网页不会自动确认已付款。',save:'保存 QR 图片',copy:'复制银行账号',copied:'已复制银行账号',bank:'银行',holder:'户口名称',account:'银行账号',amount:'订单金额（含运费）',cash:'现金付款：请在取餐／送达时付款。',choose:'请选择已配置的付款方式。'},
  en:{qrTitle:'Scan DuitNow QR to pay',bankTitle:'Bank transfer details',notReady:'This payment method is not configured yet. Please choose another method or contact us.',manual:'After paying, enter your payment reference. We verify transfers manually; placing an order is not payment confirmation.',save:'Save QR image',copy:'Copy account number',copied:'Account number copied',bank:'Bank',holder:'Account holder',account:'Account number',amount:'Order total (including container & delivery)',cash:'Cash: pay when collecting or receiving your order.',choose:'Choose an available payment method.'},
  ms:{qrTitle:'Imbas DuitNow QR untuk bayaran',bankTitle:'Butiran pindahan bank',notReady:'Kaedah pembayaran ini belum disediakan. Pilih kaedah lain atau hubungi kami.',manual:'Selepas bayaran, masukkan nombor rujukan. Bayaran disemak secara manual; pesanan bukan pengesahan bayaran.',save:'Simpan imej QR',copy:'Salin nombor akaun',copied:'Nombor akaun disalin',bank:'Bank',holder:'Nama pemegang akaun',account:'Nombor akaun',amount:'Jumlah pesanan (termasuk penghantaran)',cash:'Tunai: bayar semasa ambil atau menerima pesanan.',choose:'Pilih kaedah pembayaran tersedia.'}
};
const pt = key => PAYMENT_TEXT[lang]?.[key] || PAYMENT_TEXT.zh[key] || key;
function paymentReady(method){
  const c=window.PC_PAYMENT||{};
  if(method==='DuitNow QR')return !!c.duitnowQrImage;
  if(method==='Bank Transfer')return !!(c.bankName&&c.accountHolder&&c.accountNumber);
  return method==='Cash';
}
function renderPaymentInfo(){
  const container=$("#paymentInfo"), select=$("#paymentSelect");
  if(!container||!select)return;
  const method=select.value, c=window.PC_PAYMENT||{};
  const empty=()=>{container.textContent=pt('notReady');container.classList.add('payment-pending');};
  container.replaceChildren();container.classList.remove('payment-pending');
  if(method==='Cash'){
    container.textContent=pt('cash'); return;
  }
  if(!paymentReady(method)){empty();return;}
  const heading=document.createElement('h4');heading.textContent=pt(method==='DuitNow QR'?'qrTitle':'bankTitle');container.appendChild(heading);
  const total=document.createElement('p');total.className='payment-amount';
  const cost=checkoutSubtotal()+(isDelivery()&&validQuote()?deliveryQuote.fee:0);
  total.textContent=pt('amount')+': '+money(cost);container.appendChild(total);
  if(method==='DuitNow QR'){
    const img=document.createElement('img');img.className='payment-qr';img.src=c.duitnowQrImage;img.alt='Premium Crest DuitNow QR';
    img.onerror=()=>{img.remove();container.classList.add('payment-pending');empty();};
    container.appendChild(img);
    if(c.duitnowReceivingName){const name=document.createElement('p');name.textContent=c.duitnowReceivingName;container.appendChild(name);}
    const save=document.createElement('a');save.className='payment-link';save.href=c.duitnowQrImage;save.target='_blank';save.rel='noopener noreferrer';save.textContent=pt('save');container.appendChild(save);
  }else{
    [[pt('bank'),c.bankName],[pt('holder'),c.accountHolder],[pt('account'),c.accountNumber]].forEach(([label,value])=>{
      const line=document.createElement('p');line.className='bank-line';const b=document.createElement('strong');b.textContent=label+': ';
      const v=document.createElement('span');v.textContent=value;line.append(b,v);container.appendChild(line);
    });
    const copy=document.createElement('button');copy.type='button';copy.className='payment-link';copy.textContent=pt('copy');
    copy.onclick=()=>navigator.clipboard?.writeText(c.accountNumber).then(()=>{copy.textContent=pt('copied')}).catch(()=>{copy.textContent=c.accountNumber});
    container.appendChild(copy);
  }
  const note=document.createElement('p');note.className='payment-notice';note.textContent=pt('manual');container.appendChild(note);
}

function fillSelectors(){
  $("#weekSelect").value=t('week',{n:PCCalendar.menuWeek(singleDateIso)});
  $("#daySelect").innerHTML=DAYS.map(d=>`<option value="${d}">${dayName(d)}</option>`).join("");
  $("#daySelect").value=state.day;
}
function dayName(d){return lang==='zh'?DAY_ZH[d]:lang==='ms'?DAY_MS[d]:d}
function currentItems(){return data.weeks.find(w=>w.week===state.week).days[state.day][state.meal]}
function dishPrimary(item){return lang==='zh'?item.zh:item.en}
function dishSecondary(item){return lang==='zh'?item.en:item.zh}
function renderMeal(){
  state.week=PCCalendar.menuWeek(singleDateIso);
  state.day=PCCalendar.weekday(singleDateIso);
  $("#mealContext").textContent=`${singleDateIso} · ${t('week',{n:state.week})} · ${dayName(state.day)} · ${t(state.meal)}`;
  $("#menuGrid").innerHTML=currentItems().map(item=>{
    const on=state.selected.has(item.id); const icon=item.type==="meat"?"🍗":"🥬";
    return `<article class="food-card ${item.type==='veg'?'veg':''} ${on?'selected':''}" data-id="${item.id}">
      <div class="food-photo">${item.image?`<img src="${item.image}" alt="${item.en}">`:icon}</div>
      <div><span class="food-no">#${item.no}</span><div class="food-name">${dishPrimary(item)}</div><div class="food-en">${dishSecondary(item)}</div><span class="type-tag">${item.type==='meat'?t('meat'):t('veg')}</span></div>
      <div class="check">✓</div></article>`}).join("");
  document.querySelectorAll(".food-card").forEach(c=>c.onclick=()=>{state.selected.has(c.dataset.id)?state.selected.delete(c.dataset.id):state.selected.add(c.dataset.id);renderMeal()});
  renderSummary();
}
function calculateMeal(items){
  const p=data.pricing, m=items.filter(i=>i.type==='meat').length, v=items.filter(i=>i.type==='veg').length;
  if(m>=2 && v>=1){return {valid:true,label:t('set2label'),base:p.twoMeatOneVeg,extraMeat:Math.max(0,m-2),extraVeg:Math.max(0,v-1),total:p.twoMeatOneVeg+Math.max(0,m-2)*p.extraMeat+Math.max(0,v-1)*p.extraVeg,m,v}}
  if(m>=1 && v>=2){return {valid:true,label:t('set1label'),base:p.oneMeatTwoVeg,extraMeat:Math.max(0,m-1),extraVeg:Math.max(0,v-2),total:p.oneMeatTwoVeg+Math.max(0,m-1)*p.extraMeat+Math.max(0,v-2)*p.extraVeg,m,v}}
  return {valid:false,total:0,m,v,label:t('needSet')};
}
function renderSummary(){
  const chosen=currentItems().filter(i=>state.selected.has(i.id));
  const list=$("#selectedList");list.classList.toggle("empty",!chosen.length);
  list.innerHTML=chosen.length?chosen.map(i=>`<div class="selected-row"><span>#${i.no} ${dishPrimary(i)}</span><span>${i.type==='meat'?t('meatShort'):t('vegShort')}</span></div>`).join(""):t('noFood');
  const calc=calculateMeal(chosen); let html="";
  if(calc.valid){
    html+=`<div class="price-line"><span>${calc.label}</span><strong>${money(calc.base)}</strong></div>`;
    if(calc.extraMeat)html+=`<div class="price-line"><span>${t('extraMeat')} × ${calc.extraMeat}</span><strong>${money(calc.extraMeat*data.pricing.extraMeat)}</strong></div>`;
    if(calc.extraVeg)html+=`<div class="price-line"><span>${t('extraVeg')} × ${calc.extraVeg}</span><strong>${money(calc.extraVeg*data.pricing.extraVeg)}</strong></div>`;
    const qty=readQty($("#singleQty").value);
    html+=`<div class="price-line total"><span>${t('mealTotal')} × ${qty||"?"}</span><strong>${qty?money(calc.total*qty):"—"}</strong></div>`;
  } else html=`<div class="muted">${t('selected')} ${calc.m} ${t('meatShort')} + ${calc.v} ${t('vegShort')}<br>${calc.label}</div>`;
  $("#priceBreakdown").innerHTML=html; $("#addMealBtn").disabled=!calc.valid||!readQty($("#singleQty").value)||!bookingValid(singleDateIso,$("#singleQty").value);
  refreshBookingNotices();
}
function addCurrentMeal(){
  if(!PCCalendar.mealBookable(singleDateIso,state.meal)){alert(calendarText('pastMeal'));return;}
  const items=currentItems().filter(i=>state.selected.has(i.id)), calc=calculateMeal(items); if(!calc.valid)return;
  // Keep a cart within one calendar service week so same menu/weekdays from a different cycle cannot share a delivery quote.
  const requestedMonday=mondayFrom(singleDateIso);
  if([...orderWeeks()].some(m=>m!==requestedMonday)){
    alert(wt('singleDateDifferentWeek'));return;
  }
  const qty=readQty($("#singleQty").value);if(!qty){alert(qtyLabel());return;}
  if(!bookingValid(singleDateIso,qty)){alert(bookingText("expired")+"\n"+showDeadline(singleDateIso,qty));return;}
  resetSubmitButton();cart.push({kind:'meal',week:state.week,day:state.day,meal:state.meal,serviceDate:singleDateIso,items,calc,qty,price:calc.total*qty});state.selected.clear();persistCart();renderMeal();showCart();
}
function addonDisplayName(a){
  const parts=a.name.split('/').map(x=>x.trim());
  if(lang==='zh')return a.name;
  return parts.length>1?parts[1]:a.name;
}
function addonPlannerMonday(){
  const base=weeklyMode?weeklyMonday:(singleDateIso||PCCalendar.initialSingleDate());
  return weeklyMode?base:PCCalendar.mondayOf(base);
}
function addonServiceDate(day=addonPlannerDay){return PCWeekly.dateFor(addonPlannerMonday(),day);}
function addonMealTypes(serviceDate){
  return ['breakfast','lunch'].filter(meal=>cart.some(x=>x.kind==='meal'&&x.serviceDate===serviceDate&&x.meal===meal));
}
function addonChoiceValid(serviceDate,choice){
  if(choice==='separate')return true;
  const meals=addonMealTypes(serviceDate);
  return choice==='with_breakfast'?meals.includes('breakfast'):choice==='with_lunch'?meals.includes('lunch'):false;
}
function defaultAddonDelivery(serviceDate){
  const meals=addonMealTypes(serviceDate);
  if(meals.includes('breakfast'))return 'with_breakfast';
  if(meals.includes('lunch'))return 'with_lunch';
  return 'separate';
}
function addonDeliveryChoice(serviceDate){
  const existing=cart.find(x=>x.kind==='addon'&&x.serviceDate===serviceDate&&addonChoiceValid(serviceDate,x.addonDelivery||'separate'));
  if(existing)return existing.addonDelivery||'separate';
  const draft=addonDeliveryDraft[serviceDate];
  if(draft&&addonChoiceValid(serviceDate,draft))return draft;
  return defaultAddonDelivery(serviceDate);
}
function addonDeliveryLabel(choice){
  return choice==='with_breakfast'?at('withBreakfast'):choice==='with_lunch'?at('withLunch'):at('separate');
}
function addonCartItem(serviceDate,id){
  return cart.find(x=>x.kind==='addon'&&x.serviceDate===serviceDate&&String(x.id)===String(id));
}
function reconcileAddonDeliveryLinks(){
  cart.forEach(x=>{
    if(x.kind!=='addon'||!x.serviceDate)return;
    try{x.week=PCCalendar.menuWeek(x.serviceDate);x.day=PCCalendar.weekday(x.serviceDate);}catch(_e){return;}
    if(!addonChoiceValid(x.serviceDate,x.addonDelivery||'separate'))x.addonDelivery='separate';
  });
}
function migrateLegacyAddons(){
  let changed=false;
  const fallback=addonServiceDate();
  cart.forEach(x=>{
    if(x.kind!=='addon')return;
    if(!x.serviceDate){x.serviceDate=fallback;x.week=PCCalendar.menuWeek(fallback);x.day=PCCalendar.weekday(fallback);x.addonDelivery='separate';changed=true;}
    else{x.week=x.week||PCCalendar.menuWeek(x.serviceDate);x.day=x.day||PCCalendar.weekday(x.serviceDate);x.addonDelivery=x.addonDelivery||'separate';}
  });
  reconcileAddonDeliveryLinks();
  if(changed)localStorage.setItem('pc_cart',JSON.stringify(cart));
}
function setAddonDelivery(serviceDate,choice){
  if(!addonChoiceValid(serviceDate,choice))return;
  addonDeliveryDraft[serviceDate]=choice;
  cart.filter(x=>x.kind==='addon'&&x.serviceDate===serviceDate).forEach(x=>x.addonDelivery=choice);
  resetSubmitButton();persistCart();
}
function renderAddonDeliveryOptions(serviceDate){
  const box=$('#addonDeliveryOptions'),legend=$('#addonDeliveryLegend');if(!box||!legend)return;
  legend.textContent=at('delivery');
  const meals=addonMealTypes(serviceDate),choice=addonDeliveryChoice(serviceDate),opts=[];
  if(meals.includes('breakfast'))opts.push(['with_breakfast',at('withBreakfast')]);
  if(meals.includes('lunch'))opts.push(['with_lunch',at('withLunch')]);
  opts.push(['separate',at('separate')]);
  box.innerHTML=opts.map(([value,label])=>`<label class="addon-delivery-option"><input type="radio" name="addonDelivery-${serviceDate}" value="${value}" ${choice===value?'checked':''}><span>${label}</span></label>`).join('')+`<p class="addon-delivery-note">${meals.length?(isDelivery()?'':at('pickup')):at('noMeal')}</p>`;
  box.querySelectorAll('input[type="radio"]').forEach(r=>r.onchange=()=>setAddonDelivery(serviceDate,r.value));
}
function adjustAddon(id,delta){
  const serviceDate=addonServiceDate(),monday=mondayFrom(serviceDate);
  if([...orderWeeks()].some(m=>m!==monday)){alert(at('differentWeek'));return;}
  const addon=data.addons.find(x=>x.id===id);if(!addon)return;
  let item=addonCartItem(serviceDate,id);const oldQty=item?Number(item.qty||0):0,newQty=Math.max(0,oldQty+delta);
  if(newQty>MAX_ORDER_QTY){alert(qtyLabel());return;}
  if(newQty>0&&!bookingValid(serviceDate,newQty)){alert(bookingText('expired')+'\n'+showDeadline(serviceDate,newQty));return;}
  resetSubmitButton();
  if(newQty===0){cart=cart.filter(x=>x!==item);}
  else if(item){item.qty=newQty;item.unitPrice=addon.price;item.price=Math.round(addon.price*newQty*100)/100;item.week=PCCalendar.menuWeek(serviceDate);item.day=PCCalendar.weekday(serviceDate);item.addonDelivery=addonDeliveryChoice(serviceDate);}
  else{cart.push({kind:'addon',id:addon.id,name:addon.name,qty:newQty,unitPrice:addon.price,price:Math.round(addon.price*newQty*100)/100,week:PCCalendar.menuWeek(serviceDate),day:PCCalendar.weekday(serviceDate),serviceDate,addonDelivery:addonDeliveryChoice(serviceDate)});}
  persistCart();
}
function renderAddons(){
  if(!data||!$('#addonGrid'))return;
  const monday=addonPlannerMonday();if(!DAYS.includes(addonPlannerDay))addonPlannerDay='Monday';
  const serviceDate=addonServiceDate();
  $('#addonPlannerTitle').textContent=at('title');$('#addonPlannerHint').textContent=at('hint');$('#addonWeekLabel').textContent=`${monday} → ${PCWeekly.dateFor(monday,'Friday')}`;
  $('#addonDayTabs').innerHTML=DAYS.map(day=>{const date=PCWeekly.dateFor(monday,day);return `<button type="button" class="addon-day-tab ${day===addonPlannerDay?'active':''}" data-addon-day="${day}">${dayName(day)}<small>${date}</small></button>`;}).join('');
  $('#addonDayTabs').querySelectorAll('[data-addon-day]').forEach(b=>b.onclick=()=>{addonPlannerDay=b.dataset.addonDay;renderAddons();});
  $('#addonDateCaption').textContent=`${at('date')}: ${dayName(addonPlannerDay)} · ${serviceDate} · ${t('week',{n:PCCalendar.menuWeek(serviceDate)})}`;
  const selectedQty=cart.filter(x=>x.kind==='addon'&&x.serviceDate===serviceDate).reduce((n,x)=>n+(readQty(x.qty)||0),0),deadlineQty=Math.max(1,selectedQty||1);
  $('#addonDeadlineHint').textContent=`${at('deadline')} ${showDeadline(serviceDate,deadlineQty)}`;$('#addonDeadlineHint').classList.toggle('deadline-expired',!bookingValid(serviceDate,deadlineQty));
  renderAddonDeliveryOptions(serviceDate);
  $('#addonGrid').innerHTML=data.addons.map(a=>{const item=addonCartItem(serviceDate,a.id),q=item?Number(item.qty||0):0;return `<div class="addon-card"><strong>${addonDisplayName(a)}</strong><span class="price">${money(a.price)}</span><div class="qty-row"><button type="button" data-a="${a.id}" data-d="-1">−</button><span id="q-${a.id}">${q}</span><button type="button" data-a="${a.id}" data-d="1">＋</button></div></div>`;}).join('');
  document.querySelectorAll('.qty-row button').forEach(b=>b.onclick=()=>adjustAddon(b.dataset.a,Number(b.dataset.d)));
}
function persistCart(){reconcileAddonDeliveryLinks();invalidateDelivery();localStorage.setItem("pc_cart",JSON.stringify(cart));updateCart();if(data)renderAddons()}
function updateCart(){
  syncContainerFeeLabels();
  $("#cartCount").textContent=cart.length;const box=$("#cartItems"); if(!box)return;
  box.innerHTML=cart.length?cart.map((x,i)=>x.kind==='meal'?`<div class="cart-item"><div><h4>${x.serviceDate||''} · ${t('week',{n:x.week})} · ${dayName(x.day)} ${t(x.meal)}</h4><p>${x.items.map(a=>`#${a.no} ${dishPrimary(a)}`).join(' · ')}</p><p>${calculateMeal(x.items).label}</p><label>${qtyLabel()} <input class="cart-qty" type="number" min="1" max="1000" step="1" value="${x.qty||1}" onchange="changeCartQty(${i},this.value)"></label></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`:`<div class="cart-item"><div><h4>${x.serviceDate||''} · ${t('week',{n:x.week})} · ${dayName(x.day)} · ${t('addonCart')}</h4><p>${addonNameFromCart(x.name)}</p><p class="cart-addon-delivery">${at('linked')}: ${addonDeliveryLabel(x.addonDelivery||'separate')}</p><label>${qtyLabel()} <input class="cart-qty" type="number" min="1" max="1000" step="1" value="${x.qty||1}" onchange="changeCartQty(${i},this.value)"></label></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`).join(""):`<p class='muted'>${t('emptyCart')}</p>`;
  const subtotal=foodSubtotal();
  const pack=containerFee();
  $("#cartTotal").textContent=money(subtotal+pack+(isDelivery() && validQuote()?deliveryQuote.fee:0));
  if($("#foodSubtotal")) $("#foodSubtotal").textContent=money(subtotal);
  if($("#containerAmount")) $("#containerAmount").textContent=money(pack);
  if($("#cartFoodSubtotal")) $("#cartFoodSubtotal").textContent=money(subtotal);
  if($("#cartContainerQty")) $("#cartContainerQty").textContent=String(containerQty());
  if($("#cartContainerAmount")) $("#cartContainerAmount").textContent=money(pack);
  if($("#checkoutContainerQty")) $("#checkoutContainerQty").textContent=String(containerQty());
  renderDeliverySection();
  renderCalendarHints();refreshBookingNotices();
}
function addonNameFromCart(name){const parts=name.split('/').map(x=>x.trim());return lang==='zh'?name:(parts[1]||name)}
window.changeCartQty=(i,raw)=>{
  const qty=readQty(raw);if(!qty){alert(qtyLabel());updateCart();return;}
  const x=cart[i];if(!x)return;
  if(x.kind==='meal'){x.qty=qty;x.price=Math.round(calculateMeal(x.items).total*qty*100)/100;
    if(x.weeklyPlanId===weeklyPlanId&&weeklyDrafts?.[x.weeklySlot]){weeklyDrafts[x.weeklySlot].qty=qty;saveWeeklyDraft();renderWeeklyPlanner();}
  }else{x.price=Math.round((x.unitPrice||x.price/(x.qty||1))*qty*100)/100;x.qty=qty;}
  if(x.serviceDate&&!bookingValid(x.serviceDate,x.qty)){alert(bookingText('expired')+'\n'+showDeadline(x.serviceDate,x.qty));}
  resetSubmitButton();persistCart();
};
window.removeCart=i=>{
  const removed=cart.splice(i,1)[0];
  if(removed?.weeklyPlanId===weeklyPlanId&&weeklyDrafts?.[removed.weeklySlot]){
    weeklyDrafts[removed.weeklySlot].enabled=false;saveWeeklyDraft();renderWeeklyPlanner();
  }
  persistCart();
};
function showCart(){updateCart();$("#cartSection").classList.remove("hidden");$("#cartSection").scrollIntoView({behavior:"smooth"})}
function isDelivery(){return $("#fulfilmentSelect").value === "Delivery / 送餐";}
function foodSubtotal(){return Math.round(cart.reduce((sum,x)=>sum+Number(x.price||0),0)*100)/100;}
function mealContainerQty(){return cart.filter(x=>x.kind==='meal').reduce((sum,x)=>sum+(readQty(x.qty||1)||0),0);}
function addonContainerQty(){return cart.filter(x=>x.kind==='addon').reduce((sum,x)=>sum+(readQty(x.qty||1)||0),0);}
// Container policy:
// - Every Meal portion uses 1 container at the standard rate.
// - A01-A08: 1 container per add-on portion at the standard rate.
// - A09-A10: 1 container per add-on portion at the fried-chicken rate.
// - Mixed orders add all container quantities and fees together.
function containerQty(){return mealContainerQty()+addonContainerQty();}
function addonContainerFee(){
  return cart.filter(x=>x.kind==='addon').reduce((sum,x)=>{
    const qty=readQty(x.qty||1)||0;
    const id=String(x.id||'').trim().toUpperCase();
    const unit=(id==='A09'||id==='A10')?CONTAINER_FEE_FRIED_CHICKEN:CONTAINER_FEE_PER_PORTION;
    return sum+(qty*unit);
  },0);
}
function containerFee(){
  const fee=(mealContainerQty()*CONTAINER_FEE_PER_PORTION)+addonContainerFee();
  return Math.round(fee*100)/100;
}
function checkoutSubtotal(){return Math.round((foodSubtotal()+containerFee())*100)/100;}
function chosenMode(){return document.querySelector('input[name="deliveryMode"]:checked')?.value||'separate';}
function chosenJointTime(){return $("#jointTime").value||'breakfast';}
function currentPlan(){return PCDelivery.plan(cart,chosenMode());}
function deliveryTrips(){return currentPlan().trips;}
function tripSignature(){return currentPlan().signature;}
function normalizeAddress(s){return String(s||'').trim().replace(/\s+/g,' ').toLowerCase();}
// Every displayed and submitted delivery fee must belong to this exact address,
// set of meals and delivery arrangement. The backend independently verifies quoteId.
function deliveryContext(){
  return {
    addressKey:normalizeAddress(document.querySelector('[name="address"]').value),
    trips:deliveryTrips(),
    mode:chosenMode(),
    signature:tripSignature(),
    jointTime:chosenMode()==='together'?chosenJointTime():'none'
  };
}
function validQuote(){
  if(!deliveryQuote || !deliveryQuote.ok || !deliveryQuote.quoteId || deliveryQuote.manual ||
     !Number.isFinite(Number(deliveryQuote.fee)) || Number(deliveryQuote.fee)<0 ||
     !Number.isFinite(Number(deliveryQuote.expiresAt)) || deliveryQuote.expiresAt<=Date.now())return false;
  const saved=deliveryQuote.context;
  if(!saved)return false;
  const live=deliveryContext();
  return saved.addressKey===live.addressKey && saved.trips===live.trips &&
    saved.mode===live.mode && saved.signature===live.signature &&
    saved.jointTime===live.jointTime;
}
function invalidateDelivery(){deliveryQuote=null;quoteEpoch++;if($("#deliveryMatched"))$("#deliveryMatched").checked=false;renderDeliverySection();}
function renderDeliverySection(){
  const box=$("#deliverySection");if(!box)return;
  box.classList.toggle('hidden',!isDelivery());
  const address=document.querySelector('[name="address"]');address.required=isDelivery();
  const deliveryPlan=currentPlan();
  $("#deliveryRule").textContent=dt('tripInfo');
  document.querySelectorAll('[data-delivery-i18n]').forEach(el=>el.textContent=dt(el.dataset.deliveryI18n));
  $("#jointTimeRow").classList.toggle('hidden',chosenMode()!=='together'||!deliveryPlan.eligible);
  $("#jointWarning").classList.toggle('hidden',chosenMode()!=='together'||!deliveryPlan.eligible);
  const dayText=deliveryPlan.days.map(x=>{const mealText=x.meals.map(m=>t(m));const addonText=(x.addonTargets||[]).map(v=>addonDeliveryLabel(v));const parts=[...mealText,...addonText.map(v=>`${t('addonCart')}: ${v}`)];return `${x.serviceDate||t('week',{n:x.week})} ${dayName(x.day)}: ${parts.join(' + ')} → ${x.trips} ${dt('tripCount')}`;});
  $("#deliveryPlanPreview").textContent=deliveryPlan.days.length?`${dt('dayTrips')}: ${dayText.join(' · ')} · ${dt('tripCount')}: ${deliveryPlan.trips}`:dt('addonOnly');
  $("#kitchenAddress").textContent=CONFIG.kitchenAddress;
  const status=$("#deliveryStatus"), match=$("#deliveryMatchRow");
  if(!isDelivery()){status.textContent=dt('pickupFree');match.classList.add('hidden');}
  else if(quoteBusy){status.textContent=dt('calculating');match.classList.add('hidden');}
  else if(deliveryQuote && deliveryQuote.ok){
    status.textContent=deliveryQuote.manual?dt('tooFar'):(`${dt('distance')}: ${Number(deliveryQuote.distanceKm).toFixed(2)} km · ${dt('tripCount')}: ${deliveryQuote.trips} · ${dt('deliveryFee')}: ${money(deliveryQuote.fee)}`);
    if(!deliveryQuote.manual && !validQuote())status.textContent+=' · '+dt('addressChanged');
    match.classList.toggle('hidden',!validQuote());
    $("#matchedAddress").textContent=deliveryQuote.matchedAddress||address.value;
    $("#confirmMatchedLabel").textContent=dt('confirmAddress');
  }else{status.textContent=dt('deliveryInfo')+`: 0–5 km ${money(DELIVERY_RATE_0_5)} · >5–10 km ${money(DELIVERY_RATE_5_10)} · >10 km `+dt('tooFar').split(':')[0];match.classList.add('hidden');}
  $("#calculateDelivery").textContent=quoteBusy?dt('calculating'):dt('calculate');
  $("#calculateDelivery").disabled=quoteBusy||!cart.length;
  $("#deliveryLine").classList.toggle('hidden',!isDelivery());
  const quoteReady=isDelivery() && validQuote();
  $("#deliveryAmount").textContent=quoteReady?money(deliveryQuote.fee):'—';
  const fullTotal=checkoutSubtotal()+(quoteReady?Number(deliveryQuote.fee):0);
  $("#deliveryGrandTotal").textContent=money(fullTotal);
  $("#cartTotal").textContent=money(fullTotal);
  $("#foodSubtotal").textContent=money(foodSubtotal());
  if($("#containerAmount")) $("#containerAmount").textContent=money(containerFee());
  if($("#cartFoodSubtotal")) $("#cartFoodSubtotal").textContent=money(foodSubtotal());
  if($("#cartContainerQty")) $("#cartContainerQty").textContent=String(containerQty());
  if($("#cartContainerAmount")) $("#cartContainerAmount").textContent=money(containerFee());
  if($("#checkoutContainerQty")) $("#checkoutContainerQty").textContent=String(containerQty());
  renderPaymentInfo();
}
function syncContainerFeeLabels(){
  document.querySelectorAll('[data-container-unit]').forEach(el=>el.textContent=money(CONTAINER_FEE_PER_PORTION));
  document.querySelectorAll('[data-container-chicken-unit]').forEach(el=>el.textContent=money(CONTAINER_FEE_FRIED_CHICKEN));
  document.querySelectorAll('[data-container-policy]').forEach(el=>{
    el.textContent = lang==='zh'
      ? `Meal 与 A01–A08：每份 1 个餐盒，每盒 ${money(CONTAINER_FEE_PER_PORTION)}；A09 整鸡腿与 A10 鸡腿：每份 1 个餐盒，每盒 ${money(CONTAINER_FEE_FRIED_CHICKEN)}。`
      : lang==='ms'
        ? `Meal dan A01–A08: 1 bekas setiap unit pada ${money(CONTAINER_FEE_PER_PORTION)}; A09 dan A10: 1 bekas setiap unit pada ${money(CONTAINER_FEE_FRIED_CHICKEN)}.`
        : `Meal and A01–A08: 1 container per unit at ${money(CONTAINER_FEE_PER_PORTION)}; A09 and A10: 1 container per unit at ${money(CONTAINER_FEE_FRIED_CHICKEN)}.`;
  });
}
async function loadRuntimeSettings(){
  syncContainerFeeLabels();
  if(!CONFIG.appsScriptUrl)return;
  try{
    const result=await requestJsonp('settings');
    const standard=Number(result?.settings?.CONTAINER_FEE);
    const chicken=Number(result?.settings?.CONTAINER_FEE_FRIED_CHICKEN);
    const delivery05=Number(result?.settings?.DELIVERY_0_5_KM);
    const delivery510=Number(result?.settings?.DELIVERY_OVER_5_TO_10_KM);
    const kitchen=String(result?.settings?.KITCHEN_ADDRESS||'').trim();
    if(result?.ok){
      if(Number.isFinite(standard) && standard>=0 && standard<=100) CONTAINER_FEE_PER_PORTION=Math.round(standard*100)/100;
      if(Number.isFinite(chicken) && chicken>=0 && chicken<=100) CONTAINER_FEE_FRIED_CHICKEN=Math.round(chicken*100)/100;
      if(Number.isFinite(delivery05) && delivery05>=0 && delivery05<=1000) DELIVERY_RATE_0_5=Math.round(delivery05*100)/100;
      if(Number.isFinite(delivery510) && delivery510>=0 && delivery510<=1000) DELIVERY_RATE_5_10=Math.round(delivery510*100)/100;
      if(kitchen) CONFIG.kitchenAddress=kitchen;
      syncContainerFeeLabels();
      updateCart();
    }
  }catch(err){
    console.warn('Using default container fees:',CONTAINER_FEE_PER_PORTION,CONTAINER_FEE_FRIED_CHICKEN,err);
  }
}
function requestJsonp(action, params={}){
  return new Promise((resolve,reject)=>{
    const callback='pcDeliveryCallback_'+Math.random().toString(36).slice(2);
    const u=new URL(CONFIG.appsScriptUrl);
    u.searchParams.set('action',action);u.searchParams.set('callback',callback);
    Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,String(v)));
    const script=document.createElement('script');
    let timer;
    const cleanup=()=>{clearTimeout(timer);delete window[callback];script.remove();};
    window[callback]=value=>{cleanup();resolve(value);};
    script.onerror=()=>{cleanup();reject(new Error('Network error'));};
    timer=setTimeout(()=>{cleanup();reject(new Error('Quote timed out'));},QUOTE_TIMEOUT_MS);
    script.src=u.href;document.head.appendChild(script);
  });
}
async function calculateDelivery(){
  if(!isDelivery()||quoteBusy||!cart.length)return;
  const address=document.querySelector('[name="address"]').value.trim();
  if(address.length<12){alert(dt('needAddress'));return;}
  const context=deliveryContext();
  const plan=cart.map(x=>({kind:x.kind,week:x.week,day:x.day,meal:x.meal||'',serviceDate:x.serviceDate||'',addonDelivery:x.addonDelivery||'separate'}));
  const epoch=++quoteEpoch;quoteBusy=true;deliveryQuote=null;renderDeliverySection();
  try{
    const result=await requestJsonp('deliveryQuote',{
      address,mode:context.mode,jointTime:context.jointTime,
      plan:JSON.stringify(plan),trips:context.trips});
    if(epoch!==quoteEpoch)return;
    if(!result.ok)throw new Error(result.error||'Quote unavailable');
    // Refuse a quote from an old deployment or a response for a different cart.
    if(result.signature!==context.signature || Number(result.trips)!==context.trips ||
       result.mode!==context.mode || result.jointTime!==context.jointTime){
      throw new Error('Backend / website version mismatch. Update Code.gs, redeploy a New version and try again.');
    }
    if(context.addressKey!==deliveryContext().addressKey ||
       context.signature!==deliveryContext().signature ||
       context.mode!==deliveryContext().mode ||
       context.jointTime!==deliveryContext().jointTime){
      throw new Error('Address or meal selection changed. Calculate delivery again.');
    }
    if(!result.manual && (!result.quoteId || !Number.isFinite(Number(result.fee)) || Number(result.fee)<0)){
      throw new Error('Delivery price missing; please calculate again.');
    }
    deliveryQuote={...result,fee:result.manual?null:Number(result.fee),trips:Number(result.trips),
      distanceKm:Number(result.distanceKm),context,
      expiresAt:Date.now()+Math.min(15*60000,(Number(result.validForSeconds)||900)*1000)};
    $("#deliveryMatched").checked=false;
  }catch(err){if(epoch===quoteEpoch){deliveryQuote=null;alert(dt('quoteFail')+'\n'+err.message);}}
  finally{quoteBusy=false;renderDeliverySection();}
}
async function placeOrder(e){
  e.preventDefault();if(isSubmitting)return;if(weeklyMode&&!checkWeeklyReady())return;if(!cart.length){alert(t('cartEmptyAlert'));return;}
  const stale=cart.filter(invalidCartMeal);
  if(stale.length){alert(calendarText('staleCart'));return;}
  const late=cart.find(x=>x.serviceDate&&!bookingValid(x.serviceDate,x.qty||1));
  if(late){alert(bookingText('expired')+'\n'+showDeadline(late.serviceDate,late.qty||1));return;}
  if(isDelivery() && (!validQuote()||deliveryQuote.manual||!$("#deliveryMatched").checked)){alert(validQuote()&&deliveryQuote.manual?dt('tooFar'):dt('quoteFirst'));return;}
  if(!paymentReady($("#paymentSelect").value)){alert(pt('choose'));return;}
  const submitBtn=e.target.querySelector('button[type="submit"]');const originalText=submitBtn.textContent;isSubmitting=true;submitBtn.disabled=true;submitBtn.textContent=t('submitting');
  const form=Object.fromEntries(new FormData(e.target).entries());
  const serviceDates=[...new Set(cart.map(x=>x.serviceDate).filter(Boolean))].sort();
  const mealCount=cart.filter(x=>x.kind==='meal').reduce((n,x)=>n+(x.qty||1),0);
  form.orderType=serviceDates.length>1?'Weekly':mealCount>1?'Full Day':mealCount===1?'Single Meal':'Add-on Only';
  form.serviceDate=serviceDates.length>1?`${serviceDates[0]} – ${serviceDates[serviceDates.length-1]}`:(serviceDates[0]||'');
  if(cart.some(x=>!readQty(x.qty||1))){alert(qtyLabel());return;}
  const fee=isDelivery()?deliveryQuote.fee:0;
  const order={orderId:createOrderId(),createdAt:new Date().toISOString(),customer:form,items:cart,foodSubtotal:foodSubtotal(),containerFee:containerFee(),subtotal:checkoutSubtotal(),deliveryFee:fee,total:checkoutSubtotal()+fee,deliveryMode:isDelivery()?chosenMode():'pickup',jointTime:isDelivery()&&chosenMode()==='together'?chosenJointTime():'none',deliverySignature:isDelivery()?tripSignature():null,deliveryQuoteId:isDelivery()?deliveryQuote.quoteId:null,deliveryTrips:isDelivery()?deliveryTrips():0,deliveryDistanceKm:isDelivery()?deliveryQuote.distanceKm:null};
  try{
    if(!CONFIG.appsScriptUrl)throw new Error('Apps Script URL missing');
    // Apps Script redirects often block CORS for POST. Cross-origin no-cors sends, then JSONP polls the order receipt.
    await fetch(CONFIG.appsScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(order)});
    let receipt;
    for(let i=0;i<5;i++){
      await new Promise(r=>setTimeout(r,1600));
      try{receipt=await requestJsonp('orderStatus',{orderId:order.orderId});if(receipt.ok&&receipt.found)break;}catch(_e){}
    }
    if(!receipt||!receipt.found){
      $("#orderResult").classList.remove('hidden');
      $("#orderResult").textContent=dt('unverified')+' Order ID: '+order.orderId;
      submitBtn.disabled=true;submitBtn.textContent=t('submitted');
      return;
    }
    $("#orderResult").classList.remove('hidden');
    $("#orderResult").textContent=`${t('success')} · ${order.orderId} · ${dt('grandTotal')}: ${money(order.total)}. ${t('doNotRepeat')}`;
    cart=[];localStorage.removeItem(weeklyStorageKey());weeklyDrafts=PCWeekly.emptyDraft(false);
    persistCart();saveWeeklyDraft();renderWeeklyPlanner();e.target.reset();applyLanguage();submitBtn.disabled=true;submitBtn.textContent=t('submitted');
  }catch(err){isSubmitting=false;submitBtn.disabled=false;submitBtn.textContent=originalText;alert(t('submitFail')+' '+err.message);}
}

function resetSubmitButton(clearResult=true){
  isSubmitting=false;const submitBtn=document.querySelector('#checkoutForm button[type="submit"]');if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=t('placeOrder')}
  const result=$("#orderResult");if(result&&clearResult){result.classList.add("hidden");result.innerHTML="";}
}
const CALENDAR_I18N={
  zh:{single:'送餐日期自动对应菜单周；每月第一段日历周为 Week 1。',weekly:'每一天按实际日期自动对应菜单周；跨月时可能显示不同 Week。',pastMeal:'此餐已过当天订餐时间，请选择下一可订日期。',staleCart:'购物车中有过期日期或菜单周错误的餐点，请移除后重新选择。',clearStale:'移除过期餐点',dateAdvanced:'日期已自动更新，之前未加入购物车的选菜需要重新选择。',changed:'日期已经更新，菜单周同步更新。'},
  en:{single:'Menu weeks match the delivery date. Week 1 begins with the first calendar row of each month.',weekly:'Each delivery day uses its own menu week. A week crossing months may show two menu weeks.',pastMeal:'The ordering cut-off for this meal has passed. Choose a later date.',staleCart:'Some cart meals have expired dates or incorrect menu weeks. Remove them and select again.',clearStale:'Remove expired items',dateAdvanced:'The date was automatically updated. Select any unsaved dishes again.',changed:'Date updated and menu week synchronized.'},
  ms:{single:'Minggu menu mengikut tarikh penghantaran. Minggu 1 bermula pada awal setiap bulan.',weekly:'Setiap tarikh menggunakan minggu menu yang betul. Minggu merentasi bulan mungkin ada dua menu.',pastMeal:'Tempoh pesanan hidangan ini telah tamat. Sila pilih tarikh lain.',staleCart:'Ada hidangan dengan tarikh luput atau minggu menu salah. Buang dan pilih semula.',clearStale:'Buang item tamat tempoh',dateAdvanced:'Tarikh dikemas kini secara automatik. Sila pilih semula hidangan yang belum disimpan.',changed:'Tarikh dan minggu menu dikemas kini.'}
};
function calendarText(key){return (CALENDAR_I18N[lang]||CALENDAR_I18N.zh)[key]||key;}
function invalidCartMeal(x){
  try{
    if(!x.serviceDate||PCCalendar.menuWeek(x.serviceDate)!==Number(x.week)||PCCalendar.weekday(x.serviceDate)!==x.day)return true;
    if(x.kind==='meal')return !PCCalendar.mealBookable(x.serviceDate,x.meal);
    if(x.kind==='addon')return !bookingValid(x.serviceDate,x.qty||1);
    return true;
  }catch(_e){return true;}
}
function renderCalendarHints(){
  if($('#singleCalendarHint'))$('#singleCalendarHint').textContent=calendarText('single');
  if($('#weeklyCalendarHint'))$('#weeklyCalendarHint').textContent=calendarText('weekly');
  const banner=$('#calendarWarning');
  if(banner){const hasInvalid=cart.some(invalidCartMeal);banner.classList.toggle('hidden',!hasInvalid);$('#calendarWarningText').textContent=calendarText('staleCart');$('#clearStaleCart').textContent=calendarText('clearStale');}
}
function refreshCalendarDate(){
  if(!data||!$('#singleDate'))return;
  const today=PCCalendar.nowInMalaysia().date;
  const suggested=PCCalendar.initialSingleDate();
  $('#singleDate').min=today;
  $('#singleDate').max=PCCalendar.addDays(today,90);
  $('#weeklyMonday').min=PCCalendar.mondayOf(today);
  // Refresh after a day rollover or after today's lunch cut-off; preserve manually selected future dates.
  const expired=singleDateIso<today || (singleDateIso===today&&!PCCalendar.mealBookable(today,'lunch'));
  if(expired || (!singleDateManuallyChosen && suggested!==singleDateIso && !state.selected.size && !cart.length)){
    if(state.selected.size)alert(calendarText('dateAdvanced'));
    singleDateManuallyChosen=false;
    singleDateIso=suggested;
    state.week=PCCalendar.menuWeek(singleDateIso);
    state.day=PCCalendar.weekday(singleDateIso);
    state.meal=PCCalendar.initialMeal(singleDateIso);
    state.selected.clear();$('#singleDate').value=singleDateIso;
    document.querySelectorAll('.meal-tab').forEach(b=>b.classList.toggle('active',b.dataset.meal===state.meal));
    fillSelectors();renderMeal();
  } else if(singleDateIso===today && !PCCalendar.mealBookable(today,'breakfast') && state.meal==='breakfast' && !state.selected.size){
    state.meal='lunch';
    document.querySelectorAll('.meal-tab').forEach(b=>b.classList.toggle('active',b.dataset.meal===state.meal));
    renderMeal();
  }
  const suggestedMonday=PCCalendar.initialWeeklyMonday();
  if((weeklyMonday<PCCalendar.mondayOf(today)||(weeklyMonday===PCCalendar.mondayOf(today)&&suggestedMonday!==weeklyMonday))&&!cart.some(x=>x.weeklyPlanId===weeklyPlanId)){
    weeklyMonday=suggestedMonday;
    loadWeeklyDraft();applyWeeklyLanguage();renderWeeklyPlanner();
  }
  if(weeklyDrafts){
    let changed=false;
    for(const {day,meal,key} of PCWeekly.slots()){
      if(!PCCalendar.mealBookable(PCWeekly.dateFor(weeklyMonday,day),meal)&&weeklyDrafts[key].enabled){weeklyDrafts[key].enabled=false;changed=true;}
    }
    if(changed){saveWeeklyDraft();syncEntireWeeklyCart();renderWeeklyPlanner();}
  }
  renderAddons();renderCalendarHints();refreshBookingNotices();
}
function createOrderId(){const date=PCCalendar.nowInMalaysia().date.replaceAll('-','');return `PC-${date.slice(2)}-${Math.floor(1000+Math.random()*9000)}`}
/* Weekly order: ten meals are selected before one single checkout/POST. */
const weeklyStorageKey=()=>`pc_weekly_draft_${weeklyPlanId}`;
function planIdentifier(monday=weeklyMonday){return `W${PCCalendar.menuWeek(monday)}@${monday}`;}
function loadWeeklyDraft(){
  weeklyPlanId=planIdentifier();
  let raw=null;try{raw=JSON.parse(localStorage.getItem(weeklyStorageKey())||'null');}catch(_e){}
  weeklyDrafts=PCWeekly.normalizeDraft(raw,weeklyMenu);
  // A currently open week may start before today; only future breakfast/lunch slots stay enabled.
  for(const {key,day,meal} of PCWeekly.slots()){
    if(!PCCalendar.mealBookable(PCWeekly.dateFor(weeklyMonday,day),meal))weeklyDrafts[key].enabled=false;
  }
  // Allow an existing same-week cart to populate the planner if the saved draft is absent.
  if(!raw){
    cart.filter(x=>x.kind==='meal'&&x.weeklyPlanId===weeklyPlanId).forEach(x=>{
      const k=PCWeekly.slotKey(x.day,x.meal);
      weeklyDrafts[k]={enabled:PCCalendar.mealBookable(x.serviceDate,x.meal),selected:x.items.map(item=>item.id),qty:x.qty||1};
    });
  }
  syncEntireWeeklyCart();
}
function saveWeeklyDraft(){localStorage.setItem(weeklyStorageKey(),JSON.stringify(weeklyDrafts));}
function weekOfDay(day){return PCCalendar.menuWeek(PCWeekly.dateFor(weeklyMonday,day));}
function weeklyMenu(day){return data.weeks.find(w=>w.week===weekOfDay(day));}
function syncEntireWeeklyCart(){
  const before=cart.length;
  const otherWeeks=[...orderWeeks()].filter(m=>m!==weeklyMonday);
  if(otherWeeks.length){
    // Leave old cart intact while the user chooses to finish it; no silent removal.
    $('#weeklyStatusText').textContent=wt('singleDateDifferentWeek');
    return;
  }
  cart=cart.filter(x=>x.weeklyPlanId!==weeklyPlanId);
  for(const {day,meal,key} of PCWeekly.slots()){
    const entry=PCWeekly.buildMeal({week:weekOfDay,monday:weeklyMonday,day,meal,draft:weeklyDrafts[key],menu:weeklyMenu,calculate:calculateMeal,planId:weeklyPlanId});
    if(entry){entry.qty=readQty(weeklyDrafts[key].qty)||1;entry.price=Math.round(entry.price*entry.qty*100)/100;cart.push(entry);}
  }
  if(before||cart.length)persistCart();else updateCart();
}
function applyWeeklyLanguage(){
  document.querySelectorAll('[data-weekly-i18n]').forEach(el=>el.textContent=wt(el.dataset.weeklyI18n));
  if(!data)return;
  $('#weeklyWeekSelect').value=PCCalendar.summary(weeklyMonday).map(w=>t('week',{n:w})).join(' → ');
  renderCalendarHints();
}
function switchOrderMode(weekly){
  if(weekly && [...orderWeeks()].some(m=>m!==weeklyMonday)){
    alert(wt('singleDateDifferentWeek'));return;
  }
  weeklyMode=weekly;
  $('#singleSelector').classList.toggle('hidden',weekly);
  $('#singleMealArea').classList.toggle('hidden',weekly);
  $('#weeklyPanel').classList.toggle('hidden',!weekly);
  $('#singleModeBtn').classList.toggle('active',!weekly);
  $('#weeklyModeBtn').classList.toggle('active',weekly);
  $('#singleModeBtn').setAttribute('aria-pressed',String(!weekly));
  $('#weeklyModeBtn').setAttribute('aria-pressed',String(weekly));
  renderAddons();
  if(weekly){applyWeeklyLanguage();renderWeeklyPlanner();$('#weeklyPanel').scrollIntoView({behavior:'smooth',block:'start'});}
}
function changeWeeklyPlan(monday){
  let valid=false;
  try{valid=PCWeekly.isMonday(monday)&&monday>=PCCalendar.mondayOf(PCCalendar.nowInMalaysia().date);}catch(_e){}
  if(!valid){alert(wt('weeklyInvalidDate'));$('#weeklyMonday').value=weeklyMonday;return;}
  if(monday===weeklyMonday)return;
  if([...orderWeeks()].some(m=>m!==monday && !cart.some(x=>x.weeklyPlanId===weeklyPlanId&&x.serviceDate&&mondayFrom(x.serviceDate)===m))){
    alert(wt('singleDateDifferentWeek'));$('#weeklyMonday').value=weeklyMonday;return;
  }
  const oldId=weeklyPlanId;
  if(cart.some(x=>x.weeklyPlanId===oldId)&&!confirm(wt('weeklyChanged'))){
    $('#weeklyMonday').value=weeklyMonday;return;
  }
  cart=cart.filter(x=>x.weeklyPlanId!==oldId);
  saveWeeklyDraft();
  weeklyMonday=monday;state.selected.clear();
  fillSelectors();renderMeal();loadWeeklyDraft();saveWeeklyDraft();
  $('#weeklyMonday').value=weeklyMonday;applyWeeklyLanguage();renderWeeklyPlanner();renderAddons();
  persistCart();
}
function setWeeklyPreset(preset){
  if(!weeklyDrafts)return;
  for(const {key,meal} of PCWeekly.slots()){
    const [dayNameForSlot,mealForSlot]=key.split(':');
    const bookable=PCCalendar.mealBookable(PCWeekly.dateFor(weeklyMonday,dayNameForSlot),mealForSlot);
    weeklyDrafts[key].enabled=bookable&&((preset==='all')||(preset===meal));
    if(preset==='none')weeklyDrafts[key].enabled=false;
  }
  saveWeeklyDraft();syncEntireWeeklyCart();resetSubmitButton();renderWeeklyPlanner();
}
function weeklyGridClick(e){
  const btn=e.target.closest('[data-weekly-food]');if(!btn)return;
  const key=PCWeekly.slotKey(btn.dataset.day,btn.dataset.meal);
  const slot=weeklyDrafts[key];if(!slot||!slot.enabled)return;
  const id=btn.dataset.weeklyFood;
  if(slot.selected.includes(id))slot.selected=slot.selected.filter(x=>x!==id);else slot.selected.push(id);
  saveWeeklyDraft();syncEntireWeeklyCart();resetSubmitButton();renderWeeklyPlanner();
}
function weeklyQtyInput(e){
  if(!e.target.matches("[data-weekly-qty]"))return;
  const key=PCWeekly.slotKey(e.target.dataset.day,e.target.dataset.meal);
  const qty=readQty(e.target.value);if(!qty)return;
  weeklyDrafts[key].qty=qty;saveWeeklyDraft();syncEntireWeeklyCart();
  $("#weeklySubtotal").textContent=money(weeklyStatus().total);
}
function weeklyGridChange(e){
  if(!e.target.matches('[data-weekly-enable]'))return;
  const key=PCWeekly.slotKey(e.target.dataset.day,e.target.dataset.meal);
  const slotDate=PCWeekly.dateFor(weeklyMonday,e.target.dataset.day);
  weeklyDrafts[key].enabled=PCCalendar.mealBookable(slotDate,e.target.dataset.meal)&&e.target.checked;
  if(e.target.checked&&!weeklyDrafts[key].enabled)alert(calendarText('pastMeal'));
  saveWeeklyDraft();syncEntireWeeklyCart();resetSubmitButton();renderWeeklyPlanner();
}
function weeklyStatus(){return PCWeekly.status({drafts:weeklyDrafts,menu:weeklyMenu,calculate:calculateMeal});}
function checkWeeklyReady(){
  if(!weeklyMode)return true;
  const late=PCWeekly.slots().find(({day,key})=>weeklyDrafts[key]?.enabled&&!bookingValid(PCWeekly.dateFor(weeklyMonday,day),weeklyDrafts[key].qty||1));
  if(late){alert(bookingText('expired')+'\n'+showDeadline(PCWeekly.dateFor(weeklyMonday,late.day),weeklyDrafts[late.key].qty||1));return false;}
  const s=weeklyStatus();if(s.ready)return true;
  alert(s.active===0?wt('weeklyNone'):wt('weeklyIncomplete').replace('{n}',s.active-s.complete));
  if(s.missing[0])document.querySelector(`[data-weekly-card="${s.missing[0].key}"]`)?.scrollIntoView({behavior:'smooth',block:'center'});
  return false;
}
function renderWeeklyPlanner(){
  if(!weeklyDrafts||!data)return;
  const progress=weeklyStatus();
  $('#weeklyProgress').textContent=`${progress.complete} / ${progress.active}`;
  $('#weeklyStatusText').textContent=wt('weeklyReady').replace('{done}',progress.complete).replace('{active}',progress.active);
  $('#weeklySubtotal').textContent=money(progress.total);
  const lateSlot=PCWeekly.slots().find(({day,key})=>weeklyDrafts[key]?.enabled&&!bookingValid(PCWeekly.dateFor(weeklyMonday,day),weeklyDrafts[key].qty||1));
  $('#weeklyReview').disabled=!progress.ready||!!lateSlot;
  const deadlineHint=$('#weeklyDeadlineHint');if(deadlineHint){deadlineHint.textContent=lateSlot?bookingText('expired')+' '+showDeadline(PCWeekly.dateFor(weeklyMonday,lateSlot.day),weeklyDrafts[lateSlot.key].qty||1):'';deadlineHint.classList.toggle('deadline-expired',!!lateSlot);}
  $('#weeklyMonday').value=weeklyMonday;
  $('#weeklyWeekSelect').value=PCCalendar.summary(weeklyMonday).map(w=>t('week',{n:w})).join(' → ');
  $('#weeklyGrid').innerHTML=PCWeekly.DAYS.map(day=>{
    const dayDate=PCWeekly.dateFor(weeklyMonday,day), menu=weeklyMenu(day), dayWeek=weekOfDay(day);
    const meals=PCWeekly.MEALS.map(meal=>{
      const key=PCWeekly.slotKey(day,meal), draft=weeklyDrafts[key];
      const bookable=PCCalendar.mealBookable(dayDate,meal);
      const chosen=menu.days[day][meal].filter(x=>draft.selected.includes(x.id));
      const calc=calculateMeal(chosen);
      const complete=draft.enabled&&calc.valid;
      const label=!draft.enabled?wt('skipMeal'):(complete?wt('doneMeal'):wt('pendingMeal'));
      const opts=menu.days[day][meal].map(item=>{
        const on=draft.selected.includes(item.id);
        const icon=item.type==='meat'?'🍗':'🥬';
        return `<button type="button" class="weekly-dish" data-weekly-food="${item.id}" data-day="${day}" data-meal="${meal}" aria-pressed="${on}" ${!draft.enabled?'disabled':''}>
          <span class="weekly-dish-img">${item.image?`<img src="${item.image}" alt="">`:icon}</span>
          <span class="weekly-dish-info"><strong>#${item.no} ${dishPrimary(item)}</strong><small>${dishSecondary(item)}</small></span>
        </button>`;
      }).join('');
      return `<section class="weekly-meal ${!draft.enabled?'is-disabled':''} ${complete?'is-complete':''}" data-weekly-card="${key}">
         <label class="weekly-meal-title"><input type="checkbox" data-weekly-enable data-day="${day}" data-meal="${meal}" ${draft.enabled?'checked':''} ${!bookable?'disabled':''}/><span>${t(meal)}</span><span class="weekly-meal-tag">${label}</span></label>
         <div class="weekly-dishes">${opts}</div>
         <label class="weekly-qty">${qtyLabel()} <input type="number" min="1" max="1000" step="1" data-weekly-qty data-day="${day}" data-meal="${meal}" value="${draft.qty||1}" ${!draft.enabled?"disabled":""}></label><small class="booking-deadline ${draft.enabled&&!bookingValid(dayDate,draft.qty||1)?"deadline-expired":""}">${showDeadline(dayDate,draft.qty||1)}</small>
         <p class="weekly-meal-price"><span>${draft.enabled?(complete?calc.label:`${chosen.filter(x=>x.type==='meat').length} ${t('meatShort')} + ${chosen.filter(x=>x.type==='veg').length} ${t('vegShort')}`):wt('skipMeal')}</span><strong>${complete?money(calc.total*(draft.qty||1)):'—'}</strong></p>
        </section>`;
    }).join('');
    return `<section class="weekly-day"><header class="weekly-day-header"><h3>${dayName(day)} <span class="week-pill">${t('week',{n:dayWeek})}</span></h3><small>${dayDate}</small></header><div class="weekly-day-meals">${meals}</div></section>`;
  }).join('');
  renderCalendarHints();
}

init();
