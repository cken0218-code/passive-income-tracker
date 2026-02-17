import React, { useState } from 'react'
import { 
  TrendingUp, TrendingDown, DollarSign, 
  Youtube, Gift, Globe, Zap, BookOpen,
  Plus, X, BarChart3, PieChart as PieChartIcon, 
  Edit2, Trash2, Compass, Home, Download, Target, Calendar
} from 'lucide-react'
import { 
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from 'recharts'
import { useLocalStorage } from './hooks/useLocalStorage'
import ExplorePage from './components/ExplorePage'

// 貨幣符號映射
const currencySymbols = {
  USD: '$',
  HKD: 'HK$',
  CNY: '¥',
  EUR: '€',
}

// Icon 映射
const iconMap = {
  YouTube: Youtube,
  問卷: Gift,
  頻寬: Globe,
  Affiliate: Zap,
  數位產品: BookOpen,
}

// 颜色映射
const colorMap = {
  YouTube: '#FF0000',
  問卷: '#4F9CF9',
  頻寬: '#FFB800',
  Affiliate: '#FF9900',
  數位產品: '#A855F7',
}

// 初始数据（首次访问时使用）
const initialStreams = [
  { id: 1, name: 'YouTube 廣告', category: 'YouTube', amount: 1250, currency: 'USD', date: '2026-02-01' },
  { id: 2, name: 'Swagbucks', category: '問卷', amount: 45, currency: 'USD', date: '2026-02-05' },
  { id: 3, name: 'Honeygain', category: '頻寬', amount: 18, currency: 'USD', date: '2026-02-10' },
  { id: 4, name: 'Amazon Affiliate', category: 'Affiliate', amount: 320, currency: 'USD', date: '2026-02-12' },
  { id: 5, name: 'Digital Products', category: '數位產品', amount: 890, currency: 'USD', date: '2026-02-15' },
]

const monthlyData = [
  { month: '9月', income: 1850 },
  { month: '10月', income: 2100 },
  { month: '11月', income: 2450 },
  { month: '12月', income: 2380 },
  { month: '1月', income: 2720 },
  { month: '2月', income: 2523 },
]

const COLORS = ['#FF0000', '#4F9CF9', '#FFB800', '#FF9900', '#A855F7']

function App() {
  // State
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [incomeStreams, setIncomeStreams] = useLocalStorage('passiveIncome', initialStreams)
  const [monthlyGoal, setMonthlyGoal] = useLocalStorage('monthlyGoal', 3000)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showGoalModal, setShowGoalModal] = useState(false)
  const [editingStream, setEditingStream] = useState(null)
  const [formData, setFormData] = useState({ 
    name: '', 
    category: 'YouTube', 
    amount: '', 
    currency: 'USD',
    date: new Date().toISOString().split('T')[0]
  })

  // Calculations
  const totalIncome = incomeStreams.reduce((sum, item) => sum + item.amount, 0)
  const goalProgress = ((totalIncome / monthlyGoal) * 100).toFixed(1)
  const lastMonthIncome = 2720
  const growth = ((totalIncome - lastMonthIncome) / lastMonthIncome * 100).toFixed(1)

  const pieData = incomeStreams.map(item => ({
    name: item.name,
    value: item.amount
  }))

  // CRUD Functions
  const handleAddStream = () => {
    if (!formData.name || !formData.amount) return

    const newStream = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      amount: parseFloat(formData.amount),
      currency: formData.currency,
      date: formData.date,
    }

    setIncomeStreams([...incomeStreams, newStream])
    resetForm()
  }

  const handleEditStream = () => {
    if (!formData.name || !formData.amount) return

    const updatedStreams = incomeStreams.map(stream =>
      stream.id === editingStream.id
        ? { 
            ...stream, 
            name: formData.name, 
            category: formData.category, 
            amount: parseFloat(formData.amount),
            currency: formData.currency,
            date: formData.date,
          }
        : stream
    )

    setIncomeStreams(updatedStreams)
    resetForm()
  }

  const handleDeleteStream = (id) => {
    if (window.confirm('確定要刪除這個收入來源嗎？')) {
      setIncomeStreams(incomeStreams.filter(stream => stream.id !== id))
    }
  }

  const openEditModal = (stream) => {
    setEditingStream(stream)
    setFormData({ 
      name: stream.name, 
      category: stream.category, 
      amount: stream.amount,
      currency: stream.currency || 'USD',
      date: stream.date || new Date().toISOString().split('T')[0]
    })
    setShowAddModal(true)
  }

  const resetForm = () => {
    setFormData({ 
      name: '', 
      category: 'YouTube', 
      amount: '', 
      currency: 'USD',
      date: new Date().toISOString().split('T')[0]
    })
    setEditingStream(null)
    setShowAddModal(false)
  }

  // 匯出 CSV
  const exportToCSV = () => {
    const headers = ['名稱', '類別', '金額', '貨幣', '日期']
    const rows = incomeStreams.map(stream => [
      stream.name,
      stream.category,
      stream.amount,
      stream.currency || 'USD',
      stream.date || ''
    ])
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `passive-income-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  // 處理從探索頁面新增
  const handleAddFromExplore = (newStream) => {
    setIncomeStreams([...incomeStreams, newStream])
    setCurrentPage('dashboard')
  }

  return (
    <div className="min-h-screen bg-primary p-8">
      {/* Navigation */}
      <nav className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Passive Income Tracker</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'dashboard' 
                  ? 'bg-accent-green text-primary' 
                  : 'bg-secondary hover:bg-[#222]'
              }`}
            >
              <Home size={20} />
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('explore')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'explore' 
                  ? 'bg-accent-green text-primary' 
                  : 'bg-secondary hover:bg-[#222]'
              }`}
            >
              <Compass size={20} />
              探索收入
            </button>
          </div>
        </div>
        {currentPage === 'dashboard' && (
          <p className="text-text-secondary">追蹤你的被動收入，邁向財務自由</p>
        )}
      </nav>

      {/* Dashboard Page */}
      {currentPage === 'dashboard' && (
        <>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card neon-glow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary text-sm">本月總收入</span>
            <DollarSign className="text-accent-green" size={24} />
          </div>
          <div className="text-4xl font-bold profit">${totalIncome.toLocaleString()}</div>
          <div className="flex items-center mt-2">
            {growth >= 0 ? (
              <>
                <TrendingUp className="profit mr-1" size={16} />
                <span className="text-sm profit">+{growth}% vs 上月</span>
              </>
            ) : (
              <>
                <TrendingDown className="loss mr-1" size={16} />
                <span className="text-sm loss">{growth}% vs 上月</span>
              </>
            )}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary text-sm">收入來源</span>
            <BarChart3 className="text-accent-blue" size={24} />
          </div>
          <div className="text-4xl font-bold">{incomeStreams.length}</div>
          <div className="text-sm text-text-secondary mt-2">個活躍渠道</div>
        </div>

        <div className="card cursor-pointer hover:border-accent-green" onClick={() => setShowGoalModal(true)}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary text-sm">目標達成</span>
            <Target className="text-accent-purple" size={24} />
          </div>
          <div className="text-2xl font-bold">{goalProgress}%</div>
          <div className="mt-3">
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-accent-green h-2 rounded-full transition-all"
                style={{ width: `${Math.min(goalProgress, 100)}%` }}
              ></div>
            </div>
            <div className="text-sm text-text-secondary mt-2">目標: ${monthlyGoal.toLocaleString()}</div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary text-sm">最佳渠道</span>
            <PieChartIcon className="text-accent-purple" size={24} />
          </div>
          <div className="text-2xl font-bold">{incomeStreams[0].name}</div>
          <div className="text-sm profit mt-2">
            ${incomeStreams[0].amount.toLocaleString()} 
            <span className="text-text-secondary"> ({((incomeStreams[0].amount / totalIncome) * 100).toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Line Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">月度收入趨勢</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="month" stroke="#6B6B6B" />
              <YAxis stroke="#6B6B6B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F1F1F', 
                  border: '1px solid #2A2A2A',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#00FF88" 
                strokeWidth={3}
                dot={{ fill: '#00FF88', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">收入分佈</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F1F1F', 
                  border: '1px solid #2A2A2A',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Income Streams List */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">收入明細</h2>
          <div className="flex gap-2">
            <button 
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-accent-blue text-primary px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              <Download size={20} />
              匯出 CSV
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-accent-green text-primary px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              <Plus size={20} />
              新增來源
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {incomeStreams.map((stream) => {
            const Icon = iconMap[stream.category] || DollarSign
            const color = colorMap[stream.category] || '#6B6B6B'
            const percentage = totalIncome > 0 ? ((stream.amount / totalIncome) * 100).toFixed(1) : 0
            const currencySymbol = currencySymbols[stream.currency] || '$'
            return (
              <div key={stream.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-[#222] transition group">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
                    <Icon size={20} style={{ color: color }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{stream.name}</div>
                    <div className="text-sm text-text-secondary flex items-center gap-2">
                      <span>{stream.category}</span>
                      {stream.date && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {stream.date}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold profit">{currencySymbol}{stream.amount.toLocaleString()}</div>
                    <div className="text-sm text-text-secondary">{percentage}%</div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button 
                      onClick={() => openEditModal(stream)}
                      className="p-2 hover:bg-[#333] rounded-lg transition"
                    >
                      <Edit2 size={16} className="text-accent-blue" />
                    </button>
                    <button 
                      onClick={() => handleDeleteStream(stream.id)}
                      className="p-2 hover:bg-[#333] rounded-lg transition"
                    >
                      <Trash2 size={16} className="text-accent-red" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={resetForm}>
          <div className="bg-card border border-border-color rounded-xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                {editingStream ? '編輯收入來源' : '新增收入來源'}
              </h3>
              <button onClick={resetForm}>
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="名稱（例如：YouTube 廣告）"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
              />
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
              >
                <option value="YouTube">YouTube</option>
                <option value="問卷">問卷</option>
                <option value="頻寬">頻寬</option>
                <option value="Affiliate">Affiliate</option>
                <option value="數位產品">數位產品</option>
              </select>
              <div className="flex gap-3">
                <input 
                  type="number" 
                  placeholder="金額"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="flex-1 bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
                />
                <select 
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  className="bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
                >
                  <option value="USD">USD $</option>
                  <option value="HKD">HKD HK$</option>
                  <option value="CNY">CNY ¥</option>
                  <option value="EUR">EUR €</option>
                </select>
              </div>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
              />
              <button 
                onClick={editingStream ? handleEditStream : handleAddStream}
                className="w-full bg-accent-green text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                {editingStream ? '儲存' : '新增'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Goal Setting Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowGoalModal(false)}>
          <div className="bg-card border border-border-color rounded-xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">設定月度目標</h3>
              <button onClick={() => setShowGoalModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-text-secondary mb-2 block">目標金額（USD）</label>
                <input 
                  type="number" 
                  placeholder="3000"
                  value={monthlyGoal}
                  onChange={(e) => setMonthlyGoal(parseInt(e.target.value) || 0)}
                  className="w-full bg-secondary border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-accent-green"
                />
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <div className="text-sm text-text-secondary mb-2">當前進度</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold profit">${totalIncome.toLocaleString()}</span>
                  <span className="text-text-secondary mb-1">/ ${monthlyGoal.toLocaleString()}</span>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-primary rounded-full h-3">
                    <div 
                      className="bg-accent-green h-3 rounded-full transition-all"
                      style={{ width: `${Math.min(goalProgress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-text-secondary mt-2">{goalProgress}% 達成</div>
                </div>
              </div>
              <button 
                onClick={() => setShowGoalModal(false)}
                className="w-full bg-accent-green text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                儲存
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}

      {/* Explore Page */}
      {currentPage === 'explore' && (
        <ExplorePage onAddToTracker={handleAddFromExplore} />
      )}
    </div>
  )
}

export default App
