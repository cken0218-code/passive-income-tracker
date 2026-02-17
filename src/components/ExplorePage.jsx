import React, { useState } from 'react'
import { Gift, Globe, Zap, BookOpen, TrendingUp, ExternalLink, Plus, X, Search, Filter } from 'lucide-react'
import { platforms, getAllPlatforms } from '../data/platforms'

const iconMap = {
  Gift,
  Globe,
  Zap,
  BookOpen,
  TrendingUp,
}

const difficultyColors = {
  '超簡單': '#00FF88',
  '簡單': '#4F9CF9',
  '中等': '#FFB800',
  '困難': '#FF4444',
}

function ExplorePage({ onAddToTracker }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPlatform, setSelectedPlatform] = useState(null)

  // 篩選平台
  const filteredPlatforms = Object.entries(platforms).filter(([key, data]) => {
    if (selectedCategory !== 'all' && key !== selectedCategory) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return data.items.some(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">探索收入來源</h1>
        <p className="text-text-secondary">發掘適合你的被動收入渠道</p>
      </div>

      {/* 搜尋和篩選 */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="text"
            placeholder="搜尋平台名稱、標籤..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-accent-green"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
        >
          <option value="all">所有類別</option>
          <option value="survey">問卷平台</option>
          <option value="bandwidth">頻寬分享</option>
          <option value="affiliate">Affiliate</option>
          <option value="digital">數位產品</option>
          <option value="automation">自動化服務</option>
        </select>
      </div>

      {/* 平台列表 */}
      {filteredPlatforms.map(([categoryKey, categoryData]) => {
        const Icon = iconMap[categoryData.icon] || Gift
        return (
          <div key={categoryKey} className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: categoryData.color + '20' }}
              >
                <Icon size={20} style={{ color: categoryData.color }} />
              </div>
              <h2 className="text-2xl font-semibold">{categoryData.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryData.items
                .filter(item => {
                  if (!searchQuery) return true
                  const query = searchQuery.toLowerCase()
                  return item.name.toLowerCase().includes(query) ||
                         item.description.toLowerCase().includes(query) ||
                         item.tags.some(tag => tag.toLowerCase().includes(query))
                })
                .map((item) => (
                  <div 
                    key={item.id}
                    className="card hover:border-accent-green cursor-pointer transition"
                    onClick={() => setSelectedPlatform({ ...item, categoryName: categoryData.name, color: categoryData.color })}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span 
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: difficultyColors[item.difficulty] + '20', color: difficultyColors[item.difficulty] }}
                      >
                        {item.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold profit">{item.income}</div>
                        <div className="text-xs text-text-secondary">{item.region}</div>
                      </div>
                      <div className="flex gap-1">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )
      })}

      {/* 詳情 Modal */}
      {selectedPlatform && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedPlatform(null)}>
          <div className="bg-card border border-border-color rounded-xl p-6 w-full max-w-lg" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">{selectedPlatform.name}</h3>
              <button onClick={() => setSelectedPlatform(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              {/* 收益和難度 */}
              <div className="flex gap-4">
                <div className="flex-1 bg-secondary rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-1">預期收益</div>
                  <div className="text-xl font-bold profit">{selectedPlatform.income}</div>
                </div>
                <div className="flex-1 bg-secondary rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-1">難度</div>
                  <div 
                    className="text-xl font-bold"
                    style={{ color: difficultyColors[selectedPlatform.difficulty] }}
                  >
                    {selectedPlatform.difficulty}
                  </div>
                </div>
              </div>

              {/* 描述 */}
              <div>
                <div className="text-sm text-text-secondary mb-2">簡介</div>
                <p>{selectedPlatform.description}</p>
              </div>

              {/* 地區和類別 */}
              <div className="flex gap-4">
                <div>
                  <div className="text-sm text-text-secondary mb-1">適用地區</div>
                  <div className="font-medium">{selectedPlatform.region}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">類別</div>
                  <div className="font-medium">{selectedPlatform.categoryName}</div>
                </div>
              </div>

              {/* 標籤 */}
              <div>
                <div className="text-sm text-text-secondary mb-2">特點</div>
                <div className="flex flex-wrap gap-2">
                  {selectedPlatform.tags.map((tag, i) => (
                    <span key={i} className="text-sm bg-secondary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 操作按鈕 */}
              <div className="flex gap-3 pt-4">
                {selectedPlatform.url !== '#' && (
                  <a
                    href={selectedPlatform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-accent-blue text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    <ExternalLink size={20} />
                    前往網站
                  </a>
                )}
                <button
                  onClick={() => {
                    onAddToTracker({
                      id: Date.now(),
                      name: selectedPlatform.name,
                      category: selectedPlatform.categoryName,
                      amount: 0,
                      currency: 'USD',
                      date: new Date().toISOString().split('T')[0],
                    })
                    setSelectedPlatform(null)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-accent-green text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <Plus size={20} />
                  加入追蹤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExplorePage
