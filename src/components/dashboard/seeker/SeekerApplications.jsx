import { Building2, MapPin, ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const SeekerApplications = ({ appliedJobs, onJobClick, onInitSearch }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Application Log</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Recruitment Sequence Tracking</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
                        {appliedJobs.length} Active
                    </span>
                </div>
                <div className="divide-y divide-slate-50">
                    {appliedJobs.length > 0 ? appliedJobs.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => onJobClick(job)}
                            className="p-8 hover:bg-green-50/30 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 font-bold text-xl relative overflow-hidden group-hover:bg-green-600 group-hover:text-white transition-colors border border-slate-100">
                                    {job.company.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors uppercase tracking-tight">{job.title}</h4>
                                    <div className="flex items-center gap-4 mt-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                        <span className="flex items-center gap-1.5">
                                            <Building2 className="w-3.5 h-3.5" />
                                            {job.company}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col items-end">
                                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[9px] font-bold rounded-md border border-amber-100 uppercase tracking-wider">
                                        In Review
                                    </span>
                                    <span className="text-[9px] font-bold text-slate-300 mt-2 uppercase tracking-wide">Updated 2h ago</span>
                                </div>
                                <div className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all text-slate-400">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="p-20 text-center">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <p className="text-slate-900 font-bold uppercase tracking-tight text-sm">No active sequences</p>
                            <button
                                onClick={onInitSearch}
                                className="mt-4 text-green-600 font-bold text-xs uppercase tracking-widest hover:underline"
                            >
                                Initiate Search
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SeekerApplications;
