import { Search, Filter, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EmployerJobsTable = ({ jobs }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1 relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-green-100 focus-within:border-green-600 transition-all group overflow-hidden max-w-md">
                    <Search className="absolute left-4 w-4 h-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search active protocols..."
                        className="w-full pl-10 pr-4 py-3 bg-transparent text-slate-900 text-sm font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide"
                    />
                </div>
                <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                    <Filter className="w-4 h-4" />
                    Filter View
                </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Designation</th>
                                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</th>
                                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Pool</th>
                                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Timeline</th>
                                <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {jobs.slice(0, 5).map((job, idx) => (
                                <tr key={job.id} className="hover:bg-green-50/30 transition-all group cursor-pointer">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-slate-400 text-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                                                {job.title.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors tracking-tight uppercase">{job.title}</p>
                                                <p className="text-[9px] font-bold text-slate-300 tracking-widest mt-1 uppercase">ID: 0X-{idx + 104}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold uppercase rounded-lg border border-slate-200 group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                                            {job.type}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center text-[9px] font-bold text-slate-700 shadow-sm">
                                                    {String.fromCharCode(65 + i + idx)}
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-50 flex items-center justify-center text-[9px] font-bold text-slate-500 shadow-sm">
                                                +12
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                                            <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">{job.postedAt}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all ml-auto shadow-sm">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-center">
                    <button className="px-6 py-3 text-[10px] font-bold text-slate-400 hover:text-green-600 uppercase tracking-widest transition-all hover:bg-white rounded-xl">
                        Access Complete Archive
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default EmployerJobsTable;
