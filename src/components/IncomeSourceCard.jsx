import React from 'react';
import { Trash2 } from 'lucide-react';

const IncomeSourceCard = ({ source, onDelete }) => {
  const amount = source.currency === 'HKD' ? (source.amount / 7.8).toFixed(2) : source.amount;

  return (
    <div className="bg-secondary p-4 rounded-lg flex items-center justify-between hover:bg-opacity-80 transition">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{source.icon}</span>
        <div>
          <div className="font-semibold">{source.name}</div>
          <div className="text-sm text-gray-400 capitalize">{source.category}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-bold profit">${amount}</div>
          <div className="text-xs text-gray-400">{source.currency}</div>
        </div>
        <button
          onClick={() => onDelete(source.id)}
          className="p-2 hover:bg-red-500 hover:bg-opacity-20 rounded transition"
        >
          <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default IncomeSourceCard;
