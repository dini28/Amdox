import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Briefcase, Clock, DollarSign, Building2, Globe, Users, CheckCircle2, ArrowRight, ShieldCheck, Share2, Bookmark } from 'lucide-react';
import { cn } from '../utils/cn';

const DetailItem = ({ icon: Icon, label, value }) => (
    <div className="p-6 bg-slate-50/50 border border-slate-100/50 flex flex-col gap-3 group hover:bg-green-50/30 transition-all rounded-2xl">
        <div className="flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-green-600 transition-all" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-all">{label}</span>
        </div>
        <p className="text-sm font-black uppercase tracking-tight text-slate-900 leading-none">{value}</p>
    </div>
);

const JobSlideOver = ({ job, isOpen, onClose, isApplied, isSaved, onApply, onSave }) => {
    if (!job) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        onClick={onClose}
                    />

                    <div className="absolute inset-y-0 right-0 max-w-2xl w-full flex">
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
                            className="relative w-full bg-white border-l border-slate-200 shadow-2xl flex flex-col"
                        >
                            {/* Header Section */}
                            <div className="p-8 sm:p-12 border-b border-slate-100 bg-slate-50/30">
                                <div className="flex items-start justify-between gap-8 mb-12">
                                    <div className="w-20 h-20 bg-white border border-slate-200 rounded-[28px] flex items-center justify-center shrink-0 shadow-sm">
                                        <span className="text-slate-900 font-black text-3xl uppercase tracking-tighter">
                                            {job.company?.[0]}
                                        </span>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={onSave}
                                            className={cn(
                                                "p-3 bg-white border border-slate-200 rounded-2xl transition-all shadow-sm",
                                                isSaved ? "text-green-600 border-green-600" : "text-slate-400 hover:text-green-600 hover:border-green-600"
                                            )}
                                        >
                                            <Bookmark className={cn("w-5 h-5", isSaved && "fill-current")} />
                                        </button>
                                        <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-green-600 hover:border-green-600 transition-all shadow-sm">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={onClose}
                                            className="p-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{job.company}</span>
                                        {job.verified && <div className="p-1 bg-green-50 rounded-full"><ShieldCheck className="w-3.5 h-3.5 text-green-600" /></div>}
                                    </div>
                                    <h2 className="text-5xl font-black uppercase tracking-tight leading-[1.1] text-slate-900">
                                        {job.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-16">
                                {/* Core Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem icon={MapPin} label="Location" value={job.location} />
                                    <DetailItem icon={Briefcase} label="Type" value={job.type} />
                                    <DetailItem icon={DollarSign} label="Package" value={job.salary} />
                                    <DetailItem icon={Clock} label="Posted" value={job.postedAt} />
                                </div>

                                {/* Description */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 bg-slate-100" />
                                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Protocol Overiew</h3>
                                        <div className="h-px flex-1 bg-slate-100" />
                                    </div>
                                    <div className="text-lg font-medium text-slate-600 leading-relaxed uppercase tracking-tight">
                                        <p>
                                            We are auditing candidates for an elite role at <span className="text-slate-900 font-bold">{job.company}</span>.
                                            This position requires high operational autonomy and technical synthesis
                                            within our global framework.
                                        </p>
                                        <p className="mt-8">
                                            The successful operative will manage core infrastructure pipelines, ensuring
                                            maximum efficiency and zero-latency communication across distributed clusters.
                                        </p>
                                    </div>
                                </div>

                                {/* Key Tasks */}
                                <div className="space-y-8">
                                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
                                        Requirements Array
                                        <div className="flex-1 h-px bg-slate-100" />
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {['8+ Years Synthesis Experience', 'Mastery of Global Architectures', 'Operational Leadership Protocol', 'Strategic Asset Management'].map((req, i) => (
                                            <div key={i} className="flex items-center gap-6 group">
                                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center font-black text-[11px] text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                                                    {i + 1}
                                                </div>
                                                <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="p-8 sm:p-12 border-t border-slate-100 bg-slate-50/50">
                                <button
                                    onClick={!isApplied ? onApply : undefined}
                                    className={cn(
                                        "w-full py-7 text-white text-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-6 group rounded-2xl shadow-xl",
                                        isApplied ? "bg-slate-300 cursor-default" : "bg-green-600 hover:bg-green-700 shadow-green-600/30"
                                    )}
                                >
                                    {isApplied ? 'Application Pending' : 'Apply For Protocol'}
                                    {!isApplied && <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />}
                                </button>
                                <p className="text-center mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                                    Secure Connection / Status Verified / Protocol 2.4
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JobSlideOver;
