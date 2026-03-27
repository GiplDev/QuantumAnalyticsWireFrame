import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { TrendingUp, Activity, Package, AlertCircle } from 'lucide-react';
import { categories, products } from '../data/inventory-data';

export function Analytics() {
  const ageingDistribution = [
    { range: '0-30 days', count: products.filter(p => p.ageing < 30).length, fill: '#4CAF50' },
    { range: '30-60 days', count: products.filter(p => p.ageing >= 30 && p.ageing < 60).length, fill: '#66BB6A' },
    { range: '60-90 days', count: products.filter(p => p.ageing >= 60 && p.ageing < 90).length, fill: '#FFA726' },
    { range: '90-120 days', count: products.filter(p => p.ageing >= 90 && p.ageing < 120).length, fill: '#FF7043' },
    { range: '120+ days', count: products.filter(p => p.ageing >= 120).length, fill: '#F44336' },
  ];

  const movementTrend = [
    { month: 'Oct 25', fastMoving: 45, slowMoving: 28, dead: 8 },
    { month: 'Nov 25', fastMoving: 52, slowMoving: 25, dead: 9 },
    { month: 'Dec 25', fastMoving: 58, slowMoving: 22, dead: 10 },
    { month: 'Jan 26', fastMoving: 65, slowMoving: 20, dead: 11 },
    { month: 'Feb 26', fastMoving: 71, slowMoving: 18, dead: 10 },
    { month: 'Mar 26', fastMoving: 78, slowMoving: 15, dead: 9 },
  ];

  const consumptionTrend = [
    { category: 'Perfume', jan: 18000, feb: 19500, mar: 21000 },
    { category: 'Bazzar Oil', jan: 12000, feb: 12800, mar: 13900 },
    { category: 'Body Care', jan: 4200, feb: 4500, mar: 4800 },
    { category: 'Hair Care', jan: 2400, feb: 2600, mar: 2700 },
    { category: 'Household', jan: 1600, feb: 1750, mar: 1900 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
        <p className="text-gray-600">Deep dive into inventory trends and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Activity className="text-[#4CAF50]" size={24} />
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Movement Velocity</h3>
          <p className="text-2xl font-bold text-gray-900">Fast</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Package className="text-blue-600" size={24} />
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Active</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Avg Stock Turnover</h3>
          <p className="text-2xl font-bold text-gray-900">45 days</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="text-purple-600" size={24} />
            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Stable</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Demand Trend</h3>
          <p className="text-2xl font-bold text-gray-900">+8.5%</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <AlertCircle className="text-amber-600" size={24} />
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Monitor</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Dead Stock Ratio</h3>
          <p className="text-2xl font-bold text-gray-900">5.2%</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Stock Ageing Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageingDistribution}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="count"
                label={(entry) => `${entry.range}: ${entry.count}`}
              >
                {ageingDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">SKU Movement Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={movementTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="fastMoving" stroke="#4CAF50" strokeWidth={2} name="Fast Moving" />
              <Line type="monotone" dataKey="slowMoving" stroke="#FFA726" strokeWidth={2} name="Slow Moving" />
              <Line type="monotone" dataKey="dead" stroke="#F44336" strokeWidth={2} name="Dead Stock" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Consumption Trends */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Consumption Trends by Category (Q1 2026)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={consumptionTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="jan" fill="#7BC96F" name="January" radius={[8, 8, 0, 0]} />
            <Bar dataKey="feb" fill="#4CAF50" name="February" radius={[8, 8, 0, 0]} />
            <Bar dataKey="mar" fill="#0F3D3E" name="March" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Top 10 Fast-Moving SKUs</h3>
        <div className="space-y-2">
          {products
            .filter(p => p.ageing < 30)
            .sort((a, b) => a.ageing - b.ageing)
            .slice(0, 10)
            .map((product, index) => (
              <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    index === 0 ? 'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white' :
                    index === 1 ? 'bg-gray-200 text-gray-700' :
                    index === 2 ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.sku}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{product.ageing} days</p>
                  <p className="text-sm text-gray-500">{product.quantity} kg</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
