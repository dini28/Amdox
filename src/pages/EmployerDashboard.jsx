import { jobs, candidates } from '../data/mockData';
import EmployerHeader from '../components/dashboard/employer/EmployerHeader';
import EmployerStats from '../components/dashboard/employer/EmployerStats';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import { ArrowUpRight, Clock, MessageSquare, MoreHorizontal, User } from 'lucide-react';

const EmployerDashboard = () => {
    return (
        <DashboardContainer>
            {/* Hub Header Section */}
            <EmployerHeader />

            {/* Metrics Grid */}
            <EmployerStats />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Main Content - Applicant Snapshot */}
                <div className="xl:col-span-2 space-y-6">
                    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Applicant Snapshot</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time candidate feed</p>
                            </div>
                            <button className="text-[10px] font-bold text-green-600 hover:text-green-700 uppercase tracking-widest">View All</button>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {candidates.map((candidate) => (
                                <div key={candidate.id} className="p-6 hover:bg-slate-50 transition-colors flex items-center gap-4 group cursor-pointer">
                                    <img src={candidate.avatar} alt={candidate.name} className="w-12 h-12 rounded-xl object-cover border border-slate-100" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-bold text-slate-900 truncate">{candidate.name}</h4>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{candidate.experience}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium truncate">{candidate.headline}</p>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-green-600 hover:border-green-200 transition-all">
                                            <MessageSquare className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-green-600 hover:border-green-200 transition-all">
                                            <User className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar - Pending Actions */}
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-lg font-black uppercase tracking-tight mb-6 relative z-10">Pending Actions</h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Review 5 new applications</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Senior Frontend Engineer</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Respond to Jordan Lee</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Interview Request</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-50 transition-colors">
                            Go to Inbox
                        </button>
                    </div>

                    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Active Protocols</h3>
                            <button>
                                <MoreHorizontal className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {jobs.slice(0, 3).map(job => (
                                <div key={job.id} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-100">
                                            {job.title[0]}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 group-hover:text-green-600 transition-colors">{job.title}</p>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{job.applicants} Applicants</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-green-600 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContainer>
    );
};

export default EmployerDashboard;


