import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddIncomeModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'survey',
    amount: '',
    currency: 'USD',
    icon: '💰',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      amount: parseFloat(formData.amount),
    });
  };

  const iconOptions = ['💰', '📝', '🌐', '📺', '🎨', '💼', '🛒', '📊'];
  const categories = [
    { value: 'survey', label: 'Survey Sites' },
    { value: 'bandwidth', label: 'Bandwidth Sharing' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'affiliate', label: 'Affiliate Marketing' },
    { value: 'investment', label: 'Investment' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-card border border-border-color rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Income Source</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-secondary border border-border-color rounded-lg px-4 py-2 focus:outline-none focus:border-accent-green"
              placeholder="e.g., Swagbucks"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-secondary border border-border-color rounded-lg px-4 py-2 focus:outline-none focus:border-accent-green"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Amount</label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                className="w-full bg-secondary border border-border-color rounded-lg px-4 py-2 focus:outline-none focus:border-accent-green"
                placeholder="0.00"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
                className="w-full bg-secondary border border-border-color rounded-lg px-4 py-2 focus:outline-none focus:border-accent-green"
              >
                <option value="USD">USD</option>
                <option value="HKD">HKD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Icon</label>
            <div className="flex gap-2 flex-wrap">
              {iconOptions.map(icon => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({...formData, icon})}
                  className={`text-2xl p-2 rounded-lg transition ${
                    formData.icon === icon 
                      ? 'bg-accent-green bg-opacity-20 border border-accent-green' 
                      : 'bg-secondary hover:bg-opacity-80'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent-green text-black py-3 rounded-lg font-semibold hover:bg-opacity-90 transition mt-6"
          >
            Add Income Source
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeModal;
