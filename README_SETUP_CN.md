# Premium Crest 免费 Web Ordering System — 安装说明

这是一套 **不需要 QR Code、顾客直接打开网址就可以点餐** 的免费版本。

## 系统组成
- 顾客网站：GitHub Pages（免费）
- 订单接收：Google Apps Script（免费额度）
- 订单数据库：Google Sheets（免费）
- 付款：DuitNow QR / Bank Transfer / Cash
- 客服：WhatsApp / Telegram 链接可后续加入

## 1. 先在电脑测试网站
因为网页会读取 `data/menu.json`，不要直接双击 `index.html`。在项目目录启动一个本地网页服务器：

```bash
python -m http.server 8000
```

然后浏览器打开：

`http://localhost:8000`

此时 Apps Script URL 还是空的，所以系统使用 Demo 模式，订单只存浏览器 localStorage。

## 2. 建立 Google Sheets
建立一个新的 Google Spreadsheet，并新增工作表：
- ORDERS
- ORDER_ITEMS
- SETTINGS

把 `sheets-template/` 里面的 CSV 标题复制进去也可以。

## 3. 安装 Google Apps Script
在 Google Sheet：Extensions → Apps Script。
把 `google-apps-script/Code.gs` 的内容复制进去。

然后把：

```javascript
const SPREADSHEET_ID = 'PUT_YOUR_GOOGLE_SHEET_ID_HERE';
```

换成你的 Google Sheet ID。

## 4. 部署 Apps Script Web App
Apps Script：Deploy → New deployment → Web app

- Execute as: Me
- Who has access: Anyone

部署以后复制 Web App URL。

回到 `app.js`，修改：

```javascript
appsScriptUrl: "你的 Web App URL"
```

## 5. 发布 GitHub Pages
1. 免费注册 GitHub。
2. 新建 Repository，例如 `premium-crest-ordering`。
3. 上传本文件夹所有内容。
4. Settings → Pages → Deploy from branch → `main` / root。
5. GitHub 会给你一个免费网址，例如：
   `https://yourname.github.io/premium-crest-ordering/`

把这个网址直接发给顾客即可，不需要 QR Code。

## 6. 食物图片怎么加入
目前如果没有图片，网页会显示肉类/蔬菜图标占位。

你以后可以把食物照片放在：
`assets/food/`

然后在 `data/menu.json` 的每道菜加入，例如：

```json
{
  "id":"W1-MON-B-01",
  "no":"01",
  "type":"meat",
  "zh":"宫保鸡丁",
  "en":"Kung Pao Chicken",
  "image":"assets/food/W1-MON-B-01.jpg"
}
```

建议每张图片用 1:1 方形，约 600×600 px。

## 7. 当前定价逻辑
- 1肉2菜：RM10.50
- 2肉1菜：RM14.50
- 多1肉：+RM3.80
- 多1菜：+RM2.50

规则：如果顾客选择至少 2肉1菜，就以 2肉1菜为主套餐，其余自动计算加肉/加菜；否则达到 1肉2菜时，以 1肉2菜计算。

## 8. 整周下单
顾客可以把 Monday–Friday 不同早餐/午餐逐餐加入购物车，再一次 Checkout。因此同一张订单可同时包含整个星期 10 餐，也可以只订其中几餐。

## 9. 正式上线前要修改的资料
- Apps Script Web App URL
- 真实食物照片
- DuitNow QR / 收款资料（建议放 Checkout 区域）
- Delivery Fee / 配送范围（如需要）
- 早餐/午餐截单时间（第二阶段加入）
- WhatsApp 电话号码（第二阶段加入）

## 10. 重要说明
GitHub Pages、Google Sheets 和 Apps Script 都有免费使用额度。开始阶段很适合；以后订单量非常大时再考虑升级数据库/服务器即可。
