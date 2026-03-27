import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Warehouse,
  Users,
  TrendingUp,
  Bell,
  FileText,
  Settings as SettingsIcon,
  Menu,
  ChevronLeft,
  Search,
  Globe,
  User,
  ChevronDown,
  LogOut,
  UserCog
} from 'lucide-react';
import { companyLocations } from '../data/inventory-data';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/inventory', label: 'Inventory', icon: Package },
  { path: '/procurement', label: 'Procurement Engine', icon: ShoppingCart },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/warehouses', label: 'Warehouses', icon: Warehouse },
  { path: '/clients', label: 'Clients & SKU Analysis', icon: Users },
  { path: '/forecasting', label: 'Forecasting', icon: TrendingUp },
  { path: '/alerts', label: 'Alerts & Intelligence', icon: Bell },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
];

export function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(companyLocations[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!sidebarCollapsed && (
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] bg-clip-text text-transparent">
                Quantum
              </h1>
              <p className="text-xs text-gray-500">Aromatics</p>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 mx-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!sidebarCollapsed && (
                  <span className="ml-3 text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          {/* Company Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowCompanyMenu(!showCompanyMenu)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Globe size={20} className="text-[#4CAF50]" />
              <span className="font-medium">{selectedCompany.name}</span>
              {selectedCompany.isPrimary && (
                <span className="px-2 py-0.5 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white text-xs rounded-full">
                  Primary
                </span>
              )}
              <ChevronDown size={16} />
            </button>
            
            {showCompanyMenu && (
              <div className="absolute top-full mt-2 left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                {companyLocations.map((company) => (
                  <button
                    key={company.code}
                    onClick={() => {
                      setSelectedCompany(company);
                      setShowCompanyMenu(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span>{company.name}</span>
                    {company.isPrimary && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white text-xs rounded-full">
                        Primary
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search SKU / Warehouse / Client"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] rounded-full flex items-center justify-center text-white text-sm font-medium">
                  QA
                </div>
                <ChevronDown size={16} />
              </button>
              
              {showUserMenu && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <User size={16} />
                    <span className="text-sm">Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <UserCog size={16} />
                    <span className="text-sm">Settings</span>
                  </button>
                  <div className="border-t border-gray-200 my-2"></div>
                  <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600 transition-colors">
                    <LogOut size={16} />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
