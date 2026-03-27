import { TrendingUp, Calendar, Target, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export function Forecasting() {
  const demandForecast = [
    { month: 'Jan 26', actual: 42000, forecast: 42000 },
    { month: 'Feb 26', actual: 44500, forecast: 44000 },
    { month: 'Mar 26', actual: 47500, forecast: 46500 },
    { month: 'Apr 26', actual: null, forecast: 49000 },
    { month: 'May 26', actual: null, forecast: 51500 },
    { month: 'Jun 26', actual: null, forecast: 54000 },
    { month: 'Jul 26', actual: null, forecast: 56500 },
  ];

  const depletionCurve = [
    { days: 0, perfume: 21000, bazzarOil: 13900, bodycare: 4800 },
    { days: 30, perfume: 18000, bazzarOil: 12000, bodycare: 4200 },
    { days: 60, perfume: 15000, bazzarOil: 10000, bodycare: 3600 },
    { days: 90, perfume: 12000, bazzarOil: 8000, bodycare: 3000 },
    { days: 120, perfume: 9000, bazzarOil: 6000, bodycare: 2400 },
    { days: 150, perfume: 6000, bazzarOil: 4000, bodycare: 1800 },
  ];

  const categoryForecast = [
    { category: 'Perfume', current: 21013, forecast30: 18500, forecast60: 16000, forecast90: 13500 },
    { category: 'Bazzar Oil', current: 13911, forecast30: 12200, forecast60: 10500, forecast90: 8800 },
    { category: 'Body Care', current: 4789, forecast30: 4200, forecast60: 3600, forecast90: 3000 },
    { category: 'Hair Care', current: 2711, forecast30: 2400, forecast60: 2050, forecast90: 1700 },
    { category: 'Household', current: 1894, forecast30: 1650, forecast60: 1410, forecast90: 1170 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Demand Forecasting</h1>
        <p className="text-gray-600">Predictive analytics for inventory planning and procurement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <TrendingUp className="text-[#4CAF50] mb-3" size={28} />
          <h3 className="text-gray-500 text-sm mb-1">Forecast Accuracy</h3>
          <p className="text-3xl font-bold text-gray-900">94.2%</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Calendar className="text-blue-600 mb-3" size={28} />
          <h3 className="text-gray-500 text-sm mb-1">Planning Horizon</h3>
          <p className="text-3xl font-bold text-gray-900">180 days</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Target className="text-purple-600 mb-3" size={28} />
          <h3 className="text-gray-500 text-sm mb-1">Predicted Growth</h3>
          <p className="text-3xl font-bold text-gray-900">+8.5%</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Zap className="text-amber-600 mb-3" size={28} />
          <h3 className="text-gray-500 text-sm mb-1">Reorder Alerts</h3>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>
      </div>

      {/* Demand Forecast */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Demand Forecast vs Actual (kg)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={demandForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#4CAF50" 
              strokeWidth={3}
              name="Actual Demand"
              dot={{ r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="#7BC96F" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Forecasted Demand"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stock Depletion Curve */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Stock Depletion Projection (Top 3 Categories)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={depletionCurve}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="days" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Stock (kg)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="perfume" 
              stackId="1"
              stroke="#4CAF50" 
              fill="#4CAF50"
              fillOpacity={0.7}
              name="Perfume"
            />
            <Area 
              type="monotone" 
              dataKey="bazzarOil" 
              stackId="1"
              stroke="#7BC96F" 
              fill="#7BC96F"
              fillOpacity={0.7}
              name="Bazzar Oil"
            />
            <Area 
              type="monotone" 
              dataKey="bodycare" 
              stackId="1"
              stroke="#0F3D3E" 
              fill="#0F3D3E"
              fillOpacity={0.7}
              name="Body Care"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Category-wise Forecast Table */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Category-wise Stock Forecast</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Current Stock</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">30 Days</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">60 Days</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">90 Days</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categoryForecast.map((cat) => (
                <tr key={cat.category} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{cat.category}</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">{cat.current.toLocaleString()} kg</td>
                  <td className="px-6 py-4 text-right text-gray-700">{cat.forecast30.toLocaleString()} kg</td>
                  <td className="px-6 py-4 text-right text-gray-700">{cat.forecast60.toLocaleString()} kg</td>
                  <td className="px-6 py-4 text-right text-gray-700">{cat.forecast90.toLocaleString()} kg</td>
                  <td className="px-6 py-4 text-center">
                    {cat.forecast90 > 5000 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Healthy</span>
                    ) : cat.forecast90 > 2000 ? (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Monitor</span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Critical</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">🎯 Procurement Recommendations (Next 90 Days)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-sm mb-2 text-gray-900 font-medium">High Priority</p>
            <p className="font-bold text-xl mb-1 text-gray-900">Perfume Category</p>
            <p className="text-sm text-gray-800">Reorder 8,000 kg by April 15 to maintain 60-day coverage</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-sm mb-2 text-gray-900 font-medium">Medium Priority</p>
            <p className="font-bold text-xl mb-1 text-gray-900">Bazzar Oil Category</p>
            <p className="text-sm text-gray-800">Plan 5,000 kg procurement by May 1 for optimal inventory levels</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-sm mb-2 text-gray-900 font-medium">Monitor</p>
            <p className="font-bold text-xl mb-1 text-gray-900">Body Care Category</p>
            <p className="text-sm text-gray-800">Current stock sufficient for 75 days - reassess in 45 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}