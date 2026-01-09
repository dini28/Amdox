import React from 'react';
import {
    TrendingUp,
    Users,
    FileCheck,
    Activity,
    Plus,
    MoreHorizontal,
    ArrowUpRight,
    ArrowDownRight,
    ChevronRight
} from 'lucide-react';

const StatCard = ({ title, value, change, trend, icon: Icon }) => (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-start justify-between">
            <div className={`p-3 rounded-2xl ${trend === 'up' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {change}
            </div>
        </div>
        <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const records = [
        { id: '#RD-9021', type: 'Clinical Trial', status: 'Verified', date: '2024-03-15', patient: 'Anonymous A.' },
        { id: '#RD-9022', type: 'Lab Report', status: 'Pending', date: '2024-03-14', patient: 'Anonymous B.' },
        { id: '#RD-9023', type: 'Genomic Data', status: 'Verified', date: '2024-03-14', patient: 'Anonymous C.' },
        { id: '#RD-9024', type: 'Imaging', status: 'In Review', date: '2024-03-13', patient: 'Anonymous D.' },
    ];

    return (
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-gray-500 mt-1 text-sm">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
                        Export Report
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add New Record
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Records" value="12,543" change="+12%" trend="up" icon={FileCheck} />
                <StatCard title="Active Users" value="842" change="+3%" trend="up" icon={Users} />
                <StatCard title="Verification Rate" value="98.2%" change="-0.4%" trend="down" icon={TrendingUp} />
                <StatCard title="System Load" value="24%" change="-2%" trend="up" icon={Activity} />
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Recent Verifications</h2>
                    <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Record ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Patient</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {records.map((record) => (
                                <tr key={record.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-blue-600">{record.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-700">{record.type}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-700 font-medium">{record.patient}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-500">{record.date}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${record.status === 'Verified' ? 'bg-green-100 text-green-700' :
                                                record.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-sm font-bold text-gray-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all">
                                            View details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Showing 4 of 12,543 records</span>
                    <div className="flex gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronRight className="w-4 h-4 rotate-180" />
                        </button>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
