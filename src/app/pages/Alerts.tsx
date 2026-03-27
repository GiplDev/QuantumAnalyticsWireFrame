import { AlertTriangle, Info, CheckCircle, TrendingDown, Clock, Package } from 'lucide-react';
import { products } from '../data/inventory-data';

type AlertType = 'critical' | 'warning' | 'info' | 'success';

interface Alert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  sku?: string;
  timestamp: string;
  priority: 'High' | 'Medium' | 'Low';
}

export function Alerts() {
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'critical',
      title: 'Critical Low Stock Alert',
      message: 'Aloe Vera 16474 has only 5 kg remaining. Immediate procurement required.',
      sku: 'Aloe Vera 16474',
      timestamp: '2 hours ago',
      priority: 'High'
    },
    {
      id: '2',
      type: 'critical',
      title: 'Dead Stock Detection',
      message: 'Citronella EX FN1002553 has no movement for 130 days. Consider discount or liquidation.',
      sku: 'Citronella EX FN1002553',
      timestamp: '5 hours ago',
      priority: 'High'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Warehouse Capacity Alert',
      message: 'Kano Warehouse at 85% capacity. Stock redistribution recommended.',
      timestamp: '1 day ago',
      priority: 'Medium'
    },
    {
      id: '4',
      type: 'warning',
      title: 'Slow Moving SKU',
      message: 'Coconut Surf 844697 ageing at 58 days with minimal movement.',
      sku: 'Coconut Surf 844697',
      timestamp: '1 day ago',
      priority: 'Medium'
    },
    {
      id: '5',
      type: 'info',
      title: 'Procurement Opportunity',
      message: 'WATER shipment available for Sandle 24052 - 85% cost savings vs AIR.',
      sku: 'Sandle 24052',
      timestamp: '2 days ago',
      priority: 'Low'
    },
    {
      id: '6',
      type: 'success',
      title: 'Optimal Stock Level',
      message: 'Orgy 15640 EX maintaining ideal turnover rate with 8,000 kg in stock.',
      sku: 'Orgy 15640 EX',
      timestamp: '2 days ago',
      priority: 'Low'
    },
    {
      id: '7',
      type: 'warning',
      title: 'Stock Ageing Alert',
      message: 'Bint Sudan-34549Q ageing at 80 days. Recommend promotional strategy.',
      sku: 'Bint Sudan-34549Q',
      timestamp: '3 days ago',
      priority: 'Medium'
    },
    {
      id: '8',
      type: 'critical',
      title: 'Low Stock - Fast Mover',
      message: 'Pineapple 11434 (Fast mover) below safety stock threshold.',
      sku: 'Pineapple 11434',
      timestamp: '4 days ago',
      priority: 'High'
    }
  ];

  const getAlertIcon = (type: AlertType) => {
    switch (type) {
      case 'critical': return <AlertTriangle size={20} />;
      case 'warning': return <Clock size={20} />;
      case 'info': return <Info size={20} />;
      case 'success': return <CheckCircle size={20} />;
    }
  };

  const getAlertStyle = (type: AlertType) => {
    switch (type) {
      case 'critical': return 'bg-red-50 border-red-300 text-red-800';
      case 'warning': return 'bg-amber-50 border-amber-300 text-amber-800';
      case 'info': return 'bg-blue-50 border-blue-300 text-blue-800';
      case 'success': return 'bg-green-50 border-green-300 text-green-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Low': return 'bg-blue-100 text-blue-700';
    }
  };

  const criticalAlerts = alerts.filter(a => a.type === 'critical').length;
  const warningAlerts = alerts.filter(a => a.type === 'warning').length;
  const infoAlerts = alerts.filter(a => a.type === 'info' || a.type === 'success').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Alerts & Intelligence</h1>
        <p className="text-gray-600">Real-time notifications and procurement triggers</p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="text-red-600" size={28} />
            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">URGENT</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Critical Alerts</h3>
          <p className="text-3xl font-bold text-red-600">{criticalAlerts}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Clock className="text-amber-600" size={28} />
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">MONITOR</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Warning Alerts</h3>
          <p className="text-3xl font-bold text-amber-600">{warningAlerts}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <Info className="text-blue-600" size={28} />
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">INFO</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Informational</h3>
          <p className="text-3xl font-bold text-blue-600">{infoAlerts}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <TrendingDown className="text-purple-600" size={28} />
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">ACTIVE</span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">Procurement Triggers</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
        </div>
      </div>

      {/* Alert List */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Active Alerts</h3>
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Mark All as Read
          </button>
        </div>

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${getAlertStyle(alert.type)}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold mb-1">{alert.title}</h4>
                      {alert.sku && (
                        <p className="text-xs opacity-75 mb-2">SKU: {alert.sku}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      <span className="text-xs opacity-75">{alert.timestamp}</span>
                    </div>
                  </div>
                  <p className="text-sm mb-3">{alert.message}</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-lg text-xs font-medium transition-colors">
                      View Details
                    </button>
                    <button className="px-3 py-1.5 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-lg text-xs font-medium transition-colors">
                      Take Action
                    </button>
                    <button className="px-3 py-1.5 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-lg text-xs font-medium transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procurement Triggers */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Automated Procurement Triggers</h3>
        <div className="space-y-3">
          {products
            .filter(p => p.quantity < 150 && p.status === 'In-house Open')
            .slice(0, 5)
            .map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] rounded-lg">
                    <Package size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.sku}</p>
                    <p className="text-sm text-gray-500">{product.category} • {product.warehouse}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Current: {product.quantity} kg</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-shadow">
                    Create Order
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Alert Settings */}
      <div className="bg-gradient-to-r from-[#0F3D3E] to-[#1a5a5c] text-white rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">⚙️ Alert Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm mb-2 opacity-90">Low Stock Threshold</p>
            <p className="font-bold text-xl">100 kg</p>
          </div>
          <div>
            <p className="text-sm mb-2 opacity-90">Dead Stock Period</p>
            <p className="font-bold text-xl">120 days</p>
          </div>
          <div>
            <p className="text-sm mb-2 opacity-90">Notification Method</p>
            <p className="font-bold text-xl">Email + Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
