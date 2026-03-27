import { TrendingUp, TrendingDown, Package, AlertTriangle, Zap, Clock, Activity } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { getStockMetrics, getInventoryByStatus, categories, products } from '../data/inventory-data';

const KPICard = ({ 
  title, 
  value, 
  trend, 
  trendValue, 
  icon: Icon, 
  iconBg 
}: { 
  title: string; 
  value: string | number; 
  trend?: 'up' | 'down'; 
  trendValue?: string; 
  icon: any; 
  iconBg: string;
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl ${iconBg}`}>
        <Icon size={24} className="text-white" />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
          trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span className="text-xs font-medium">{trendValue}</span>
        </div>
      )}
    </div>
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

const InsightCard = ({ type, message }: { type: 'warning' | 'info' | 'success'; message: string }) => {
  const styles = {
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };
  
  return (
    <div className={`p-4 rounded-xl border ${styles[type]} flex items-start gap-3`}>
      <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export function Dashboard() {
  const metrics = getStockMetrics();
  const inventoryStatus = getInventoryByStatus();

  // Prepare chart data
  const categoryData = categories.map(cat => ({
    name: cat.name,
    value: cat.total,
    fill: cat.name === 'Perfume' ? '#4CAF50' : 
          cat.name === 'Bazzar Oil' ? '#7BC96F' :
          cat.name === 'Body Care' ? '#0F3D3E' :
          cat.name === 'Hair Care' ? '#66BB6A' :
          cat.name === 'Household' ? '#81C784' :
          '#A5D6A7'
  }));

  const warehouseData = [
    { name: 'Kano WH', stock: 15000, capacity: 25000 },
    { name: 'Milan Kano', stock: 12000, capacity: 20000 },
    { name: 'Mamoud', stock: 3000, capacity: 10000 },
    { name: 'Main Loc', stock: 8000, capacity: 15000 },
    { name: 'Challenge', stock: 1500, capacity: 5000 },
    { name: 'Essential', stock: 2000, capacity: 8000 },
  ];

  const movementData = [
    { month: 'Jan', inbound: 12000, outbound: 9000 },
    { month: 'Feb', inbound: 15000, outbound: 11000 },
    { month: 'Mar', inbound: 18000, outbound: 13000 },
  ];

  const statusData = [
    { name: 'In-house', value: inventoryStatus['In-house Open'], fill: '#4CAF50' },
    { name: 'In Transit', value: inventoryStatus['In Transit AIR'] + inventoryStatus['In Transit WATER'], fill: '#7BC96F' },
    { name: 'Ordered', value: inventoryStatus['Ordered'], fill: '#FFA726' },
    { name: 'Reserved', value: inventoryStatus['Reserved'], fill: '#0F3D3E' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Intelligence Dashboard</h1>
        <p className="text-gray-600">Quantum Aromatics WA Limited - Real-time Overview</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total SKUs"
          value={metrics.totalSKUs}
          trend="up"
          trendValue="12%"
          icon={Package}
          iconBg="bg-gradient-to-r from-[#7BC96F] to-[#4CAF50]"
        />
        <KPICard
          title="Short SKUs"
          value={metrics.shortSKUs}
          trend="down"
          trendValue="5%"
          icon={AlertTriangle}
          iconBg="bg-gradient-to-r from-orange-400 to-orange-500"
        />
        <KPICard
          title="Fast Moving"
          value={metrics.fastMovingSKUs}
          trend="up"
          trendValue="8%"
          icon={Zap}
          iconBg="bg-gradient-to-r from-blue-400 to-blue-500"
        />
        <KPICard
          title="Dead Stock"
          value={metrics.deadStock}
          trend="down"
          trendValue="3%"
          icon={Clock}
          iconBg="bg-gradient-to-r from-red-400 to-red-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Slow Moving"
          value={metrics.slowMovingSKUs}
          icon={Activity}
          iconBg="bg-gradient-to-r from-amber-400 to-amber-500"
        />
        <KPICard
          title="Pending Orders"
          value={metrics.pendingOrders}
          icon={Package}
          iconBg="bg-gradient-to-r from-purple-400 to-purple-500"
        />
        <KPICard
          title="Total Stock (kg)"
          value="47,508"
          trend="up"
          trendValue="6%"
          icon={Package}
          iconBg="bg-gradient-to-r from-[#0F3D3E] to-[#1a5a5c]"
        />
      </div>

      {/* Smart Insights */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Activity className="text-[#4CAF50]" />
          Smart Insights & Recommendations
        </h2>
        <div className="space-y-3">
          <InsightCard 
            type="warning" 
            message="Overstock detected in Kano Warehouse - Perfume category at 180% capacity" 
          />
          <InsightCard 
            type="warning" 
            message="Dead stock alert: Citronella EX FN1002553 (130 days no movement) - Consider discount strategy" 
          />
          <InsightCard 
            type="success" 
            message="Recommended WATER shipment for Sandle 24052 - Save 85% on shipping costs with 90-day lead time" 
          />
          <InsightCard 
            type="info" 
            message="Fast movers: Orgy 15640 EX (8,000kg), Okukoo 60960 (2,000kg) - Consider increasing safety stock" 
          />
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Status */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inventory Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Stock by Category (kg)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Warehouse Utilization */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Warehouse Capacity Utilization</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={warehouseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="#4CAF50" name="Current Stock" radius={[8, 8, 0, 0]} />
              <Bar dataKey="capacity" fill="#E0E0E0" name="Total Capacity" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Movement Trends */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Stock Movement Trends (2026)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={movementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="inbound" 
                stackId="1" 
                stroke="#4CAF50" 
                fill="#4CAF50" 
                fillOpacity={0.6}
                name="Inbound"
              />
              <Area 
                type="monotone" 
                dataKey="outbound" 
                stackId="2" 
                stroke="#0F3D3E" 
                fill="#0F3D3E" 
                fillOpacity={0.6}
                name="Outbound"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Stock Movements</h3>
        <div className="space-y-3">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] rounded-lg flex items-center justify-center">
                  <Package size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{product.sku}</p>
                  <p className="text-sm text-gray-500">{product.category} • {product.warehouse}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{product.quantity} {product.unit}</p>
                <p className="text-sm text-gray-500">{product.lastMovement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
