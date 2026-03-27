import { useState } from 'react';
import { Plane, Ship, TrendingUp, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { products } from '../data/inventory-data';

export function ProcurementEngine() {
  const [selectedSKU, setSelectedSKU] = useState(products[0]);
  const [recommendedQty, setRecommendedQty] = useState(1000);

  const shippingModes = [
    {
      mode: 'AIR',
      icon: Plane,
      time: '45 days',
      cost: '7x',
      costMultiplier: 7,
      reliability: 95,
      color: 'from-blue-400 to-blue-600',
      recommended: selectedSKU.ageing > 90 || selectedSKU.quantity < 100
    },
    {
      mode: 'WATER',
      icon: Ship,
      time: '90 days',
      cost: 'economical',
      costMultiplier: 1,
      reliability: 85,
      color: 'from-cyan-400 to-cyan-600',
      recommended: selectedSKU.ageing < 90 && selectedSKU.quantity > 100
    }
  ];

  const calculateCost = (qty: number, multiplier: number) => {
    const baseCost = qty * 2.5; // $2.5 per kg base rate
    return (baseCost * multiplier).toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  const calculateLeadTime = (days: number) => {
    const today = new Date();
    const arrival = new Date(today);
    arrival.setDate(arrival.getDate() + days);
    return arrival.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Calculate recommended quantity based on consumption and lead time
  const calculateRecommendedQty = () => {
    const avgDailyConsumption = 10; // kg per day (simplified)
    const safetyStock = 500; // kg
    const leadTimeDemand = avgDailyConsumption * 90; // 90 days for water
    return Math.round(leadTimeDemand + safetyStock);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Procurement Intelligence Engine</h1>
        <p className="text-gray-600">AI-powered procurement recommendations with cost optimization</p>
      </div>

      {/* SKU Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Select SKU for Procurement Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">SKU Selection</label>
            <select
              value={selectedSKU.id}
              onChange={(e) => {
                const sku = products.find(p => p.id === e.target.value);
                if (sku) setSelectedSKU(sku);
              }}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            >
              {products.filter(p => p.status === 'In-house Open').slice(0, 50).map(product => (
                <option key={product.id} value={product.id}>
                  {product.sku} - {product.quantity} kg
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recommended Quantity (kg)</label>
            <input
              type="number"
              value={recommendedQty}
              onChange={(e) => setRecommendedQty(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>
        </div>

        {/* Current Stock Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Current Stock</p>
            <p className="text-xl font-bold text-gray-900">{selectedSKU.quantity} kg</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Stock Ageing</p>
            <p className={`text-xl font-bold ${selectedSKU.ageing > 90 ? 'text-red-600' : selectedSKU.ageing > 60 ? 'text-amber-600' : 'text-green-600'}`}>
              {selectedSKU.ageing} days
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Warehouse</p>
            <p className="text-xl font-bold text-gray-900 text-sm">{selectedSKU.warehouse}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Category</p>
            <p className="text-xl font-bold text-gray-900 text-sm">{selectedSKU.category}</p>
          </div>
        </div>
      </div>

      {/* Smart Recommendation Banner */}
      <div className={`p-6 rounded-2xl ${
        selectedSKU.quantity < 100 || selectedSKU.ageing > 90
          ? 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200'
          : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
      }`}>
        <div className="flex items-start gap-4">
          {selectedSKU.quantity < 100 || selectedSKU.ageing > 90 ? (
            <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
          ) : (
            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
          )}
          <div>
            <h3 className="font-bold text-lg mb-2">
              {selectedSKU.quantity < 100 
                ? '⚠️ Urgent Procurement Required' 
                : selectedSKU.ageing > 90 
                ? '⚠️ High Stock Risk - Expedited Shipping Recommended'
                : '✓ Stock Level Stable - Cost-Optimized Shipping Available'}
            </h3>
            <p className="text-gray-700">
              {selectedSKU.quantity < 100 
                ? `Critical low stock detected. Current inventory (${selectedSKU.quantity} kg) below safety threshold. Recommend AIR shipment for 45-day delivery.`
                : selectedSKU.ageing > 90
                ? `Stock ageing at ${selectedSKU.ageing} days exceeds recommended threshold. Consider AIR shipment to minimize further ageing.`
                : `Stock level adequate with ${selectedSKU.quantity} kg available. WATER shipment recommended for 85% cost savings with 90-day lead time.`}
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Mode Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shippingModes.map((mode) => (
          <div
            key={mode.mode}
            className={`relative bg-white rounded-2xl p-6 shadow-sm border-2 transition-all ${
              mode.recommended 
                ? 'border-[#4CAF50] ring-4 ring-green-100' 
                : 'border-gray-200'
            }`}
          >
            {mode.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white text-sm font-bold rounded-full">
                ⭐ RECOMMENDED
              </div>
            )}

            <div className="flex items-center justify-between mb-6 mt-2">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${mode.color}`}>
                  <mode.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{mode.mode}</h3>
                  <p className="text-sm text-gray-500">Shipment Mode</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Delivery Time */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="text-gray-600" size={20} />
                  <span className="font-medium text-gray-700">Delivery Time</span>
                </div>
                <span className="text-xl font-bold text-gray-900">{mode.time}</span>
              </div>

              {/* Expected Arrival */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-gray-600" size={20} />
                  <span className="font-medium text-gray-700">Expected Arrival</span>
                </div>
                <span className="font-bold text-gray-900">
                  {calculateLeadTime(mode.mode === 'AIR' ? 45 : 90)}
                </span>
              </div>

              {/* Cost */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <DollarSign className="text-gray-600" size={20} />
                  <span className="font-medium text-gray-700">Estimated Cost</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">
                    ${calculateCost(recommendedQty, mode.costMultiplier)}
                  </span>
                  <p className="text-xs text-gray-500">
                    {mode.cost === 'economical' ? 'Base Rate' : `${mode.cost} Base`}
                  </p>
                </div>
              </div>

              {/* Reliability */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gray-600" size={20} />
                  <span className="font-medium text-gray-700">Reliability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${mode.color}`}
                      style={{ width: `${mode.reliability}%` }}
                    ></div>
                  </div>
                  <span className="font-bold text-gray-900">{mode.reliability}%</span>
                </div>
              </div>

              {/* Cost per kg */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Cost per kg</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${(Number(calculateCost(recommendedQty, mode.costMultiplier).replace(/,/g, '')) / recommendedQty).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              className={`w-full mt-6 py-3 rounded-xl font-bold transition-all ${
                mode.recommended
                  ? 'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white hover:shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Select {mode.mode} Shipment
            </button>
          </div>
        ))}
      </div>

      {/* Cost Savings Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Savings Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-700 mb-1">Potential Savings (WATER vs AIR)</p>
            <p className="text-3xl font-bold text-green-600">
              ${(Number(calculateCost(recommendedQty, 7).replace(/,/g, '')) - Number(calculateCost(recommendedQty, 1).replace(/,/g, ''))).toLocaleString()}
            </p>
            <p className="text-xs text-green-600 mt-1">≈ 85% cost reduction</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 mb-1">Time Trade-off</p>
            <p className="text-3xl font-bold text-blue-600">+45 days</p>
            <p className="text-xs text-blue-600 mt-1">Additional lead time for WATER</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <p className="text-sm text-purple-700 mb-1">Recommended Order Value</p>
            <p className="text-3xl font-bold text-purple-600">
              ${(recommendedQty * 15).toLocaleString()}
            </p>
            <p className="text-xs text-purple-600 mt-1">Estimated product value</p>
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="bg-gradient-to-r from-[#0F3D3E] to-[#1a5a5c] text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">💡 Procurement Insights</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#7BC96F] mt-1">▸</span>
            <span>Consider consolidating orders to maximize WATER shipment cost efficiency</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7BC96F] mt-1">▸</span>
            <span>AIR shipment recommended for SKUs with &lt;30 days inventory coverage</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7BC96F] mt-1">▸</span>
            <span>Current lead time for Goods in Transit (UK): 12-15 days customs clearance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7BC96F] mt-1">▸</span>
            <span>Safety stock recommendation: 60 days coverage for fast-moving SKUs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
