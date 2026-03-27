import { MapPin, Package, TrendingUp, AlertTriangle } from 'lucide-react';
import { warehouses, getWarehouseDistribution } from '../data/inventory-data';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export function Warehouses() {
  const warehouseStats = getWarehouseDistribution();

  const warehouseData = warehouses.map(wh => ({
    name: wh.split(' ')[0],
    fullName: wh,
    ...warehouseStats[wh],
    utilization: Math.min(100, (warehouseStats[wh].quantity / 5000) * 100) // Simplified capacity calculation
  }));

  const getUtilizationColor = (utilization: number) => {
    if (utilization > 80) return 'text-red-600';
    if (utilization > 60) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Warehouse Management</h1>
        <p className="text-gray-600">Real-time warehouse capacity and stock distribution</p>
      </div>

      {/* Warehouse Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouseData.map((wh, index) => (
          <div key={wh.fullName} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${index === 0 ? 'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50]' : 'bg-gray-100'}`}>
                  <MapPin size={24} className={index === 0 ? 'text-white' : 'text-gray-600'} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{wh.fullName}</h3>
                  <p className="text-sm text-gray-500">Active Warehouse</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total SKUs</span>
                <span className="font-bold text-gray-900">{wh.count}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Stock</span>
                <span className="font-bold text-gray-900">{wh.quantity.toLocaleString()} kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Capacity Used</span>
                <span className={`font-bold ${getUtilizationColor(wh.utilization)}`}>
                  {wh.utilization.toFixed(1)}%
                </span>
              </div>

              {/* Capacity Bar */}
              <div className="pt-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all ${
                      wh.utilization > 80 ? 'bg-red-500' : 
                      wh.utilization > 60 ? 'bg-amber-500' : 
                      'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50]'
                    }`}
                    style={{ width: `${wh.utilization}%` }}
                  ></div>
                </div>
              </div>

              {wh.utilization > 80 && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                  <AlertTriangle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-red-700">Overstock detected - consider redistribution</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Distribution Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Stock Distribution Across Warehouses</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={warehouseData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" radius={[8, 8, 0, 0]}>
              {warehouseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#4CAF50' : '#7BC96F'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Inter-warehouse Imbalance */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Inter-Warehouse Recommendations</h3>
        <div className="space-y-3">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Stock Imbalance Detected</p>
              <p className="text-sm text-amber-700">Kano Warehouse at 85% capacity. Consider transferring 2,000kg to Mamoud Warehouse (45% capacity)</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
            <TrendingUp className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Optimization Opportunity</p>
              <p className="text-sm text-blue-700">Milan Kano Warehouse is ideal for Perfume category due to climate control - recommend consolidation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
