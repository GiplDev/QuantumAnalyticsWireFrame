import { Settings as SettingsIcon, Database, Bell, Users, Lock, Globe } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">System Settings</h1>
        <p className="text-gray-600">Configure system preferences and integrations</p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Integration */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] rounded-xl">
              <Database className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Data Integration</h3>
              <p className="text-sm text-gray-600">ERP and external connections</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Tally ERP (ODBC)</p>
                <p className="text-xs text-gray-500">Last sync: 2 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Stock Sync</p>
                <p className="text-xs text-gray-500">Auto-sync every 5 minutes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500 rounded-xl">
              <Bell className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Notifications</h3>
              <p className="text-sm text-gray-600">Alert preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {['Low Stock Alerts', 'Dead Stock Warnings', 'Procurement Triggers', 'Warehouse Capacity'].map((setting) => (
              <div key={setting} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <p className="font-medium text-gray-900">{setting}</p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500 rounded-xl">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">User Management</h3>
              <p className="text-sm text-gray-600">Team access control</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Admin User', role: 'Administrator', status: 'Active' },
              { name: 'Warehouse Manager', role: 'Manager', status: 'Active' },
              { name: 'Procurement Officer', role: 'Officer', status: 'Active' }
            ].map((user) => (
              <div key={user.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">{user.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500 rounded-xl">
              <Lock className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Security</h3>
              <p className="text-sm text-gray-600">Access and authentication</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-colors">
              <p className="font-medium text-gray-900">Change Password</p>
              <p className="text-xs text-gray-500">Last changed 45 days ago</p>
            </button>
            <button className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-colors">
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-xs text-gray-500">Enabled</p>
            </button>
            <button className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-colors">
              <p className="font-medium text-gray-900">Session Management</p>
              <p className="text-xs text-gray-500">Active sessions: 2</p>
            </button>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-gradient-to-r from-[#0F3D3E] to-[#1a5a5c] text-white rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="text-white" size={28} />
          <h3 className="text-lg font-bold">Company Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm mb-1 opacity-90">Company Name</p>
            <p className="font-bold">Quantum Aromatics W.A Limited</p>
          </div>
          <div>
            <p className="text-sm mb-1 opacity-90">Primary Location</p>
            <p className="font-bold">158, Ibrahim Taiwo Road, Ilorin, Kwara State, Nigeria</p>
          </div>
          <div>
            <p className="text-sm mb-1 opacity-90">System Version</p>
            <p className="font-bold">v2.4.1 - Enterprise</p>
          </div>
        </div>
      </div>
    </div>
  );
}
