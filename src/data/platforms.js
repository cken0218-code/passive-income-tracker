// 平台資料庫 - 所有被動收入來源
export const platforms = {
  survey: {
    name: '問卷平台',
    icon: 'Gift',
    color: '#4F9CF9',
    items: [
      {
        id: 'swagbucks',
        name: 'Swagbucks',
        url: 'https://www.swagbucks.com',
        income: '$20-50/月',
        difficulty: '簡單',
        region: '全球',
        description: '最老牌問卷平台，積分可換現金/Gift Card',
        tags: ['高收益', '穩定']
      },
      {
        id: 'survey-junkie',
        name: 'Survey Junkie',
        url: 'https://www.surveyjunkie.com',
        income: '$10-40/月',
        difficulty: '簡單',
        region: '美國',
        description: '問卷多，即時支付',
        tags: ['高收益']
      },
      {
        id: 'prolific',
        name: 'Prolific',
        url: 'https://www.prolific.co',
        income: '$15-50/月',
        difficulty: '簡單',
        region: '全球',
        description: '學術研究問卷，時薪高',
        tags: ['高收益', '推薦']
      },
      {
        id: 'usertesting',
        name: 'UserTesting',
        url: 'https://www.usertesting.com',
        income: '$10/次（20分鐘）',
        difficulty: '中等',
        region: '全球',
        description: '網站/APP 測試，收益較高',
        tags: ['高時薪']
      },
      {
        id: 'yahoo-rewards',
        name: 'Yahoo Rewards',
        url: 'https://hk.promotions.yahoo.com',
        income: 'HK$50-100/月',
        difficulty: '簡單',
        region: '香港',
        description: '香港適用，積分換禮券',
        tags: ['香港', '簡單']
      },
      {
        id: 'viewfsurvey',
        name: 'ViewSurvey',
        url: 'https://www.viewsurvey.com',
        income: 'HK$30-80/月',
        difficulty: '簡單',
        region: '香港',
        description: '香港問卷平台',
        tags: ['香港']
      }
    ]
  },
  bandwidth: {
    name: '頻寬分享',
    icon: 'Globe',
    color: '#FFB800',
    items: [
      {
        id: 'honeygain',
        name: 'Honeygain',
        url: 'https://www.honeygain.com',
        income: '$5-20/月',
        difficulty: '超簡單',
        region: '全球',
        description: '被動收入，需穩定網絡',
        tags: ['被動', '推薦']
      },
      {
        id: 'packetstream',
        name: 'PacketStream',
        url: 'https://packetstream.io',
        income: '$5-15/月',
        difficulty: '超簡單',
        region: '全球',
        description: '同類產品，收益較低',
        tags: ['被動']
      },
      {
        id: 'iproyal',
        name: 'IPRoyal Pawns',
        url: 'https://iproyal.com/pawns',
        income: '$5-30/月',
        difficulty: '超簡單',
        region: '全球',
        description: '較新，收益較高',
        tags: ['被動', '高收益']
      }
    ]
  },
  affiliate: {
    name: 'Affiliate Marketing',
    icon: 'Zap',
    color: '#FF9900',
    items: [
      {
        id: 'amazon-associates',
        name: 'Amazon Associates',
        url: 'https://affiliate-program.amazon.com',
        income: '$100-1000+/月',
        difficulty: '中等',
        region: '全球',
        description: '產品推薦，佣金 1-10%',
        tags: ['高收益', '穩定']
      },
      {
        id: 'shareasale',
        name: 'ShareASale',
        url: 'https://www.shareasale.com',
        income: '$100-500/月',
        difficulty: '中等',
        region: '全球',
        description: '多品牌合作，佣金 5-50%',
        tags: ['高收益']
      },
      {
        id: 'clickbank',
        name: 'ClickBank',
        url: 'https://www.clickbank.com',
        income: '$200-2000+/月',
        difficulty: '困難',
        region: '全球',
        description: '數位產品，佣金 50-75%',
        tags: ['超高佣金']
      }
    ]
  },
  digital: {
    name: '數位產品',
    icon: 'BookOpen',
    color: '#A855F7',
    items: [
      {
        id: 'amazon-kdp',
        name: 'Amazon KDP',
        url: 'https://kdp.amazon.com',
        income: '$100-1000+/月',
        difficulty: '中等',
        region: '全球',
        description: '電子書出版',
        tags: ['被動', '高收益']
      },
      {
        id: 'gumroad',
        name: 'Gumroad',
        url: 'https://gumroad.com',
        income: '$50-500/月',
        difficulty: '中等',
        region: '全球',
        description: 'Templates、設計資源銷售',
        tags: ['被動']
      },
      {
        id: 'udemy',
        name: 'Udemy',
        url: 'https://www.udemy.com',
        income: '$200-2000+/月',
        difficulty: '困難',
        region: '全球',
        description: '線上課程銷售',
        tags: ['高收益', '需專業']
      }
    ]
  },
  automation: {
    name: '自動化服務',
    icon: 'TrendingUp',
    color: '#00FF88',
    items: [
      {
        id: 'local-business-automation',
        name: 'Local Business Automation',
        url: '#',
        income: '$300-500/客戶/月',
        difficulty: '中等',
        region: '本地',
        description: '幫中小企做自動化（email、social media）',
        tags: ['高收益', '推薦', '已驗證']
      },
      {
        id: 'social-media-management',
        name: 'Social Media Management',
        url: '#',
        income: '$200-400/客戶/月',
        difficulty: '中等',
        region: '全球',
        description: '社群媒體管理服務',
        tags: ['穩定']
      }
    ]
  }
}

// 根據標籤篩選平台
export const getPlatformsByTag = (tag) => {
  const results = []
  Object.entries(platforms).forEach(([category, data]) => {
    data.items.forEach(item => {
      if (item.tags.includes(tag)) {
        results.push({ ...item, category, categoryName: data.name, color: data.color })
      }
    })
  })
  return results
}

// 獲取所有平台（扁平化）
export const getAllPlatforms = () => {
  const results = []
  Object.entries(platforms).forEach(([category, data]) => {
    data.items.forEach(item => {
      results.push({ ...item, category, categoryName: data.name, color: data.color })
    })
  })
  return results
}
