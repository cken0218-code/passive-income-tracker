# Passive Income Tracker

被動收入追蹤器 - 黑色主題 Dashboard

## 🚀 快速開始

### 1. 安裝依賴
```bash
cd /Users/cken0218/.openclaw/workspace/passive-income-tracker
npm install
```

### 2. 啟動開發服務器
```bash
npm run dev
```

打開 http://localhost:5173

## 📊 功能

### 已完成
- ✅ 黑色主題 Dashboard
- ✅ 收入總覽卡片（總額、來源數量、最佳渠道）
- ✅ 月度趨勢圖表（Line Chart）
- ✅ 收入分佈餅圖（Pie Chart）
- ✅ 收入明細列表
- ✅ 新增收入來源 Modal
- ✅ **LocalStorage 持久化**（Phase 2 完成）
- ✅ **完整 CRUD 功能**（新增/編輯/刪除）

### 待開發
- [ ] API 整合（YouTube, PayPal）
- [ ] 多貨幣支持
- [ ] 匯出報表
- [ ] 用戶認證（多用戶支持）
- [ ] 部署到 Vercel/Netlify

## 🎨 設計參考

- **顏色**: 黑色為主 (#0D0D0D, #1A1A1A, #1F1F1F)
- **強調色**: 綠色（盈利）、紅色（虧損）、藍色/紫色（其他）
- **字體**: Inter
- **Icons**: Lucide React

## 📁 檔案結構

```
passive-income-tracker/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── RESEARCH.md（網賺研究）
└── src/
    ├── main.jsx
    ├── App.jsx（主程式）
    └── index.css
```

## 💰 支援的收入類型

1. **YouTube** - 廣告收入
2. **問卷** - Swagbucks, Survey Junkie, Prolific
3. **頻寬** - Honeygain, PacketStream
4. **Affiliate** - Amazon, ShareASale
5. **數位產品** - E-books, Templates, Courses

詳見 `RESEARCH.md`

## 🛠️ 技術棧

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## 📝 開發計劃

### Phase 1（已完成 ✅）
- UI 設計 + Mock Data

### Phase 2（已完成 ✅）
- LocalStorage 持久化
- 完整 CRUD 功能（新增/編輯/刪除）
- Hover 顯示操作按鈕

### Phase 3（待開發 - 1週）
- API 整合（YouTube Data API）
- 自動數據同步

### Phase 4（待開發 - 2週）
- 多貨幣支持
- 匯出報表（CSV/PDF）

### Phase 5（待開發 - 1個月）
- 多用戶支持
- 部署到 Vercel/Netlify

---
*Created: 2026-02-17*
