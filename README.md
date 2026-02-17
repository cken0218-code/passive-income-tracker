# Passive Income Tracker 💰

被動收入追蹤器 - 黑色主題 Dashboard，幫你追蹤所有被動收入來源

![React](https://img.shields.io/badge/React-18.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 功能特色

- 🎯 **Dashboard 總覽** - 即時查看總收入、趨勢、分佈
- 💡 **探索收入來源** - 20+ 平台資料庫（問卷、頻寬、Affiliate 等）
- 📊 **數據視覺化** - Line Chart + Pie Chart
- 💾 **數據持久化** - LocalStorage 自動儲存
- 🎨 **黑色主題** - 護眼設計
- 📅 **日期追蹤** - 記錄每筆收入時間
- 🎯 **目標設定** - 月度目標 + 達成率
- 💱 **多貨幣支持** - USD/HKD/CNY/EUR
- 📥 **匯出功能** - CSV 格式備份

## 🚀 快速開始

### 方法 1: 本地運行

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/passive-income-tracker.git
cd passive-income-tracker

# Install dependencies
npm install

# Start dev server
npm run dev
```

打開 http://localhost:5173

### 方法 2: 一鍵部署 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/passive-income-tracker)

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
