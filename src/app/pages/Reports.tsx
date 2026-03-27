import { FileText, Download, Calendar, Filter } from 'lucide-react';

export function Reports() {
  const reports = [
    { name: 'Stock Category Summary', period: '1-Jan-26 to 19-Mar-26', format: 'PDF', size: '245 KB', generated: '2026-03-19' },
    { name: 'Warehouse Utilization Report', period: 'Q1 2026', format: 'Excel', size: '156 KB', generated: '2026-03-18' },
    { name: 'SKU Movement Analysis', period: 'Feb 2026', format: 'PDF', size: '312 KB', generated: '2026-03-15' },
    { name: 'Procurement Recommendations', period: 'March 2026', format: 'PDF', size: '189 KB', generated: '2026-03-12' },
    { name: 'Client Order History', period: 'Q1 2026', format: 'Excel', size: '428 KB', generated: '2026-03-10' },
    { name: 'Dead Stock Analysis', period: 'Jan-Mar 2026', format: 'PDF', size: '167 KB', generated: '2026-03-08' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Exports</h1>
        <p className="text-gray-600">Generate and download comprehensive inventory reports</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <FileText size={32} className="mb-3" />
          <h3 className="font-bold text-lg mb-1">Generate Stock Report</h3>
          <p className="text-sm opacity-90">Current inventory status</p>
        </button>
        <button className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-[#4CAF50] transition-colors">
          <Download size={32} className="mb-3 text-[#4CAF50]" />
          <h3 className="font-bold text-lg mb-1 text-gray-900">Export to Excel</h3>
          <p className="text-sm text-gray-600">Full SKU listing</p>
        </button>
        <button className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-[#4CAF50] transition-colors">
          <Calendar size={32} className="mb-3 text-[#4CAF50]" />
          <h3 className="font-bold text-lg mb-1 text-gray-900">Schedule Report</h3>
          <p className="text-sm text-gray-600">Automated delivery</p>
        </button>
      </div>

      {/* Report History */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Generated Reports</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Period</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Format</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Generated</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-gray-400" />
                      <span className="font-medium text-gray-900">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.period}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      report.format === 'PDF' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {report.format}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.size}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.generated}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 bg-gradient-to-r from-[#7BC96F] to-[#4CAF50] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-shadow">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
