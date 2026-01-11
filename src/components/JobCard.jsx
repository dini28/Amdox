import { MapPin, Briefcase, Clock, DollarSign, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
                "group relative bg-white border border-gray-100 rounded-3xl transition-all duration-300 cursor-pointer hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 overflow-hidden",
                isGrid ? "flex flex-col p-6 min-h-[300px]" : "flex items-center p-6 gap-6"
            )}
        >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <ArrowUpRight className="w-24 h-24 text-green-600 transform translate-x-8 -translate-y-8" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-6 z-10 relative">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 font-black text-xl border border-gray-100 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors">
                        {job.company?.[0]}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-green-600 transition-colors">
                                {job.company}
                            </span>
                            {job.verified && (
                                <ShieldCheck className="w-3 h-3 text-blue-500" />
                            )}
                        </div>
                        <h3 className={cn(
                            "font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors",
                            isGrid ? "text-xl" : "text-lg"
                        )}>
                            {job.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className={cn(
                "grid gap-y-3 gap-x-6 text-sm text-gray-600 font-medium mb-6 z-10 relative",
                isGrid ? "grid-cols-2" : "grid-cols-4 flex-1"
            )}>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {job.location}
                </div>
                <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    {job.type}
                </div>
                <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    {job.salary}
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {job.postedAt}
                </div>
            </div>

            {/* Tags - pushed to bottom in grid */}
            <div className="mt-auto flex flex-wrap gap-2 z-10 relative">
                {job.urgent && (
                    <span className="px-2.5 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100 uppercase tracking-wide">
                        Urgent Hiring
                    </span>
                )}
                {(job.skills || job.tags)?.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50 group-hover:text-green-700 transition-colors uppercase tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>

            {!isGrid && (
                <div className="shrink-0 flex items-center gap-4 pl-6 border-l border-gray-100">
                    <span className={cn(
                        "px-3 py-1 text-xs font-bold rounded-lg border",
                        isApplied
                            ? "bg-blue-50 text-blue-700 border-blue-100"
                            : "bg-gray-50 text-gray-600 border-gray-200"
                    )}>
                        {isApplied ? 'Applied' : 'Details'}
                    </span>
                </div>
            )}
        </motion.div>
    );
};

export default JobCard;
