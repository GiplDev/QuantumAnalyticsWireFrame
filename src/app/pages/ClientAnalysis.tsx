import { Users, ShoppingBag, TrendingUp, Star } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function ClientAnalysis() {
  const topClients = [
    { name: 'BeautyMax Ltd', orders: 156, volume: 12500, frequency: 'Weekly', category: 'Perfume' },
    { name: 'Aroma Solutions', orders: 142, volume: 9800, frequency: 'Bi-weekly', category: 'Bazzar Oil' },
    { name: 'Essence Traders', orders: 128, volume: 8600, frequency: 'Weekly', category: 'Body Care' },
    { name: 'Fragrance Hub', orders: 115, volume: 7200, frequency: 'Monthly', category: 'Perfume' },
    { name: 'Natural Scents Co', orders: 98, volume: 6500, frequency: 'Bi-weekly', category: 'Hair Care' },
  ];

  const clientOrderCycles = [
    { client: 'BeautyMax', cycle: 7, volume: 12500 },
    { client: 'Aroma Sol', cycle: 14, volume: 9800 },
    { client: 'Essence T', cycle: 7, volume: 8600 },
    { client: 'Fragrance', cycle: 30, volume: 7200 },
    { client: 'Natural S', cycle: 14, volume: 6500 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Client & SKU Analysis</h1>
        <p className="text-gray-600">Customer buying patterns and SKU performance insights</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Users className="text-[#4CAF50] mb-3" size={32} />
          <h3 className="text-gray-500 text-sm mb-1">Total Clients</h3>
          <p className="text-3xl font-bold text-gray-900">247</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <ShoppingBag className="text-blue-600 mb-3" size={32} />
          <h3 className="text-gray-500 text-sm mb-1">Total Orders (Q1)</h3>
          <p className="text-3xl font-bold text-gray-900">1,856</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <TrendingUp className="text-purple-600 mb-3" size={32} />
          <h3 className="text-gray-500 text-sm mb-1">Avg Order Value</h3>
          <p className="text-3xl font-bold text-gray-900">₦285K</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Star className="text-amber-600 mb-3" size={32} />
          <h3 className="text-gray-500 text-sm mb-1">Repeat Rate</h3>
          <p className="text-3xl font-bold text-gray-900">87%</p>
        </div>
      </div>

      {/* Top Clients Table */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Top Clients by Volume</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Client Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Total Orders</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Volume (kg)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order Frequency</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Primary Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topClients.map((client, index) => (
                <tr key={client.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{client.name}</td>
                  <td className="px-6 py-4 text-gray-700">{client.orders}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{client.volume.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {client.frequency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{client.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Cycle Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Client Order Cycle Trends</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={clientOrderCycles}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="client" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="cycle" fill="#4CAF50" name="Order Cycle (days)" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="volume" fill="#7BC96F" name="Volume (kg)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-[#0F3D3E] to-[#1a5a5c] text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">📊 Client Intelligence Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm mb-2 text-gray-300">High-Value Clients</p>
            <p className="text-base">BeautyMax Ltd shows consistent weekly orders with 12.5 ton annual volume - prime candidate for volume discount agreement</p>
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-300">Expansion Opportunity</p>
            <p className="text-base">Fragrance Hub shifted from bi-weekly to monthly cycles - proactive engagement recommended to maintain relationship</p>
          </div>
        </div>
      </div>
    </div>
  );
}
