import { MapPin, Briefcase, Clock, DollarSign, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const JobCard = ({ job, index, viewMode, onClick, isApplied }) => {
    const isGrid = viewMode === 'grid';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onClick(job)}
            className={cn(
                "group relative bg-white border border-slate-200 rounded-[32px] transition-all duration-300 cursor-pointer hover:border-green-600 hover:shadow-xl hover:shadow-green-600/5",
                isGrid ? "flex flex-col p-8" : "flex items-center p-6 gap-8"
            )}
        >
            {/* Index Marker */}
            <div className="absolute -top-3 -left-3 bg-green-600 text-white text-[10px] font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-lg shadow-green-600/40 border-4 border-white z-10">
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Logo / Company Identity */}
            <div className={cn(
                "bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-green-50 group-hover:border-green-200",
                isGrid ? "w-16 h-16 mb-8" : "w-20 h-20 shrink-0"
            )}>
                <span className="text-slate-900 font-black text-2xl uppercase tracking-tighter group-hover:text-green-600">
                    {job.company?.[0]}
                </span>
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                {job.company}
                            </span>
                            {job.verified && (
                                <div className="p-1 bg-green-50 rounded-full">
                                    <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                                </div>
                            )}
                        </div>
                        <h3 className={cn(
                            "font-black text-slate-900 tracking-tight transition-all uppercase",
                            isGrid ? "text-2xl leading-tight" : "text-3xl"
                        )}>
                            {job.title}
                        </h3>
                    </div>
                    {isGrid && (
                        <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 shadow-sm transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    )}
                </div>

                {/* Details Grid */}
                <div className={cn(
                    "grid gap-4 mb-8",
                    isGrid ? "grid-cols-2" : "grid-cols-4"
                )}>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                        {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.postedAt}
                    </div>
                </div>

                {/* Tags / Skills */}
                <div className="flex flex-wrap gap-2">
                    {job.tags?.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-slate-50 text-[9px] font-bold uppercase tracking-widest text-slate-400 rounded-lg group-hover:bg-green-50 group-hover:text-green-600 transition-all">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {!isGrid && (
                <div className="shrink-0 flex items-center gap-8 pl-8 border-l border-slate-100">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Match Status</p>
                        <span className={cn(
                            "px-3 py-1 text-[10px] font-bold uppercase rounded-full border",
                            isApplied
                                ? "bg-blue-50 text-blue-700 border-blue-100"
                                : "bg-green-50 text-green-700 border-green-100"
                        )}>
                            {isApplied ? 'Application Sent' : 'Active Match'}
                        </span>
                    </div>
                    <button className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-sm transition-all duration-300">
                        <ArrowUpRight className="w-8 h-8" />
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default JobCard;
