import { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { products, categories } from '../data/inventory-data';

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWarehouse, setSelectedWarehouse] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesWarehouse = selectedWarehouse === 'All' || product.warehouse === selectedWarehouse;
    const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesWarehouse && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In-house Open':
        return 'bg-green-100 text-green-800';
      case 'In Transit AIR':
        return 'bg-blue-100 text-blue-800';
      case 'In Transit WATER':
        return 'bg-cyan-100 text-cyan-800';
      case 'Ordered':
        return 'bg-purple-100 text-purple-800';
      case 'Reserved':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAgeingColor = (ageing: number) => {
    if (ageing < 30) return 'text-green-600 font-semibold';
    if (ageing < 60) return 'text-blue-600 font-semibold';
    if (ageing < 120) return 'text-amber-600 font-semibold';
    return 'text-red-600 font-bold';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
          <p className="text-gray-600">Complete SKU listing with real-time stock levels</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white rounded-lg hover:shadow-lg transition-shadow">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          {/* Warehouse Filter */}
          <select
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          >
            <option value="All">All Warehouses</option>
            <option value="Kano Warehouse">Kano Warehouse</option>
            <option value="Milan Kano Warehouse">Milan Kano Warehouse</option>
            <option value="Mamoud Warehouse">Mamoud Warehouse</option>
            <option value="Main Location">Main Location</option>
            <option value="Challenge Office">Challenge Office</option>
            <option value="Essential Aroma's">Essential Aroma's</option>
            <option value="Goods in Transit (UK)">Goods in Transit (UK)</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="In-house Open">In-house Open</option>
            <option value="In Transit AIR">In Transit AIR</option>
            <option value="In Transit WATER">In Transit WATER</option>
            <option value="Ordered">Ordered</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <Filter size={16} />
          <span>Showing {filteredProducts.length} of {products.length} SKUs</span>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SKU Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Warehouse</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Ageing (days)</th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.sku}</div>
                    {product.batch && (
                      <div className="text-xs text-gray-500">Batch: {product.batch}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{product.warehouse}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-semibold text-gray-900">{product.quantity.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={getAgeingColor(product.ageing)}>
                      {product.ageing}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye size={16} className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Total Quantity</p>
          <p className="text-2xl font-bold text-gray-900">
            {filteredProducts.reduce((sum, p) => sum + p.quantity, 0).toLocaleString()} kg
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Unique SKUs</p>
          <p className="text-2xl font-bold text-gray-900">{filteredProducts.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Avg Ageing</p>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round(filteredProducts.reduce((sum, p) => sum + p.ageing, 0) / filteredProducts.length)} days
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 mb-1">Fast Movers</p>
          <p className="text-2xl font-bold text-green-600">
            {filteredProducts.filter(p => p.ageing < 30).length}
          </p>
        </div>
      </div>
    </div>
  );
}
