# Passive Income Tracker - 研究筆記

## 🎨 設計參考

### 黑色主題 Dashboard 靈感
1. **Dark Finance & Crypto Dashboard** (Figma)
   - URL: https://www.figma.com/community/file/1522238618706669989/dark-finance-crypto-dashboard-ui-design
   - 特點：cinematic dark aesthetic, neon highlights, sharp data visualization
   
2. **Muzli Dashboard Examples 2026**
   - URL: https://muz.li/blog/best-dashboard-design-examples-inspirations-for-2026/
   - 特點：financial dashboard with dark theme, grid precision

3. **Dribbble Dark Dashboard**
   - URL: https://dribbble.com/tags/dark-dashboard
   - 400+ 設計參考

### 關鍵設計元素
- **Color Scheme**: #0D0D0D (background), #1A1A1A (cards), #00FF88 (green/profit), #FF4444 (red/loss)
- **Typography**: Inter, SF Pro (modern, clean)
- **Charts**: Recharts / Chart.js with dark theme
- **Icons**: Lucide, Heroicons

## 💰 網賺方式整理

### 1️⃣ 問卷平台（Survey Sites）

#### 高收益（$5-50/月）
| 平台 | 網址 | 潛在收益 | 特點 |
|------|------|---------|------|
| **Swagbucks** | https://www.swagbucks.com | $20-50/月 | 最老牌，積分可換現金/Gift Card |
| **Survey Junkie** | https://www.surveyjunkie.com | $10-40/月 | 問卷多，即時支付 |
| **Prolific** | https://www.prolific.co | $15-50/月 | 學術研究問卷，時薪高 |
| **Toluna** | https://www.toluna.com | $10-30/月 | 產品測試機會多 |

#### 中等收益（$2-20/月）
| 平台 | 網址 | 潛在收益 |
|------|------|---------|
| **UserTesting** | https://www.usertesting.com | $10/test (20分鐘) |
| **Respondent** | https://www.respondent.io | $50-200/研究 |
| **Userlytics** | https://www.userlytics.com | $5-90/test |

#### 香港適用
| 平台 | 網址 | 潛在收益 |
|------|------|---------|
| **Yahoo Rewards** | https://hk.promotions.yahoo.com | HK$50-100/月 |
| **ViewSurvey** | https://www.viewsurvey.com | HK$30-80/月 |

### 2️⃣ 頻寬分享（Bandwidth Sharing）

| 平台 | 網址 | 潛在收益 | 注意 |
|------|------|---------|------|
| **Honeygain** | https://www.honeygain.com | $5-20/月 | 被動收入，需穩定網絡 |
| **PacketStream** | https://packetstream.io | $5-15/月 | 同類產品 |
| **IPRoyal** | https://iproyal.com/pawns | $5-30/月 | 較新，收益較高 |

### 3️⃣ Affiliate Marketing

#### 高佣金（$100-1000+/月）
| 平台 | 類型 | 佣金 |
|------|------|------|
| **Amazon Associates** | 產品推薦 | 1-10% |
| **ShareASale** | 多品牌 | 5-50% |
| **ClickBank** | 數位產品 | 50-75% |
| ** CJ Affiliate** | 品牌合作 | 5-30% |

### 4️⃣ 被動投資（Passive Investment）

| 類型 | 平台 | 潛在收益 | 風險 |
|------|------|---------|------|
| **高息存款** | ZA Bank, Mox | 2-4% 年化 | 低 |
| **基金定投** | Vanguard, FSMOne | 5-10% 年化 | 中 |
| **P2P Lending** | Funding Societies | 8-15% 年化 | 中高 |

### 5️⃣ 數位產品（Digital Products）

| 類型 | 平台 | 潛在收益 |
|------|------|---------|
| **E-books** | Amazon KDP | $100-1000+/月 |
| **Templates** | Gumroad, Etsy | $50-500/月 |
| **Online Courses** | Udemy, Teachable | $200-2000+/月 |

### 6️⃣ 自動化服務（已驗證）

| 類型 | 收益 | 時間投入 |
|------|------|---------|
| **Local Business Automation** | $300-500/client/月 | 10小時設置 |
| **Social Media Management** | $200-400/client/月 | 5小時/週 |
| **Email Marketing Setup** | $150-300/client | 一次性 |

## 🛠️ 技術棧建議

### Frontend
- **React + Tailwind CSS**（黑色主題最容易）
- **Chart.js / Recharts**（數據視覺化）
- **Lucide Icons**（現代圖標）

### Backend
- **Node.js + Express**（輕量）
- **SQLite / PostgreSQL**（存儲數據）
- **Plaid API**（銀行連接，可選）

### API Integrations
- **YouTube Data API**（追蹤廣告收入）
- **PayPal/Stripe API**（收款追蹤）
- **Google Sheets API**（手動輸入同步）

## 📊 MVP 功能

### Phase 1（1-2週）
- ✅ 黑色主題 dashboard
- ✅ 手動輸入收入來源
- ✅ 簡單圖表（pie chart, line chart）
- ✅ 月度/年度總結

### Phase 2（1個月）
- API integrations（YouTube, PayPal）
- 自動數據同步
- 警報系統（收入跌 >20%）

### Phase 3（2-3個月）
- 多貨幣支持
- 稅務計算
- Mobile app

---
*Research Date: 2026-02-17*
