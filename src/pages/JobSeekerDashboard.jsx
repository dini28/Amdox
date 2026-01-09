import { useState, useMemo, useEffect } from 'react';
import {
    Search,
    SlidersHorizontal,
    ChevronDown,
    FilterX,
    Sparkles,
    ArrowRight,
    List,
    FileText,
    CheckCircle2,
    Clock,
    History,
    ArrowUpRight,
    Zap,
    TrendingUp,
    LayoutGrid,
    LayoutList,
    Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from '../components/JobCard';
import FilterSidebar from '../components/FilterSidebar';
import SkeletonJobCard from '../components/SkeletonJobCard';
import JobSlideOver from '../components/JobSlideOver';
import { useJobContext } from '../context/JobContext';
import { useDebounce } from '../hooks/useDebounce';
import { cn } from '../utils/cn';

const Grid3X3 = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M3 3h18v18H3zM3 10h18M3 17h18M10 3v18M17 3v18" />
    </svg>
);

const SeekerStat = ({ label, value, subtext, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-8 sm:p-10 border border-slate-200 rounded-[32px] relative overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
    >
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-[9px] font-bold uppercase tracking-widest rounded-full">
                    Live Audit
                </div>
            </div>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">{value}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">{label}</p>
            {subtext && (
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-green-600 border-t border-slate-100 pt-5">
                    <TrendingUp className="w-4 h-4" />
                    <span className="uppercase tracking-widest">{subtext}</span>
                </div>
            )}
        </div>
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 text-slate-50 opacity-[0.5] pointer-events-none transform rotate-45 translate-x-12 -translate-y-12">
            <Grid3X3 className="w-full h-full" />
        </div>
    </motion.div>
);

const JobSeekerDashboard = () => {
    const { user, jobs: allJobs } = useJobContext();
    const appliedJobs = allJobs.filter(job => user.appliedJobs.includes(job.id));

    const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'applications'
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        if (searchTerm !== debouncedSearch) setIsLoading(true);
        else {
            const timer = setTimeout(() => setIsLoading(false), 400);
            return () => clearTimeout(timer);
        }
    }, [debouncedSearch, searchTerm]);

    const [filters, setFilters] = useState({
        type: [],
        level: [],
        salaryRange: [0, 200] // k
    });

    const filteredJobs = useMemo(() => {
        return allJobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                job.company.toLowerCase().includes(debouncedSearch.toLowerCase());

            const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
            const jobSalary = parseInt(job.salary?.replace(/\D/g, '') || '0');
            const matchesSalary = jobSalary >= filters.salaryRange[0] && jobSalary <= filters.salaryRange[1];

            return matchesSearch && matchesType && matchesSalary;
        });
    }, [allJobs, debouncedSearch, filters]);

    return (
        <div className="min-h-screen bg-slate-50 transition-colors duration-500 font-sans p-8 sm:p-12 lg:p-16 pt-32 sm:pt-40">

            {/* Hub Header */}
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-slate-200 pb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest">Seeker Protocol</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Talent Interface</span>
                        </div>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] uppercase">
                            WELCOME, <br />
                            <span className="text-green-600">{user.name.split(' ')[0]}</span>
                        </h1>
                        <p className="text-lg font-medium text-slate-500 mt-10 tracking-tight leading-relaxed max-w-lg">
                            "Curating your professional trajectory with high-precision opportunities."
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setActiveTab('browse')}
                            className={cn(
                                "px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all rounded-3xl flex items-center justify-center gap-4",
                                activeTab === 'browse' ? "bg-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                            )}
                        >
                            <Briefcase className="w-5 h-5" />
                            Browse Repository
                        </button>
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={cn(
                                "px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all rounded-3xl flex items-center justify-center gap-4",
                                activeTab === 'applications' ? "bg-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                            )}
                        >
                            <History className="w-5 h-5" />
                            Tracking ({appliedJobs.length})
                        </button>
                    </div>
                </div>

                {/* Stats Row - Always Visible but adapted layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SeekerStat label="Protocol Sync" value={appliedJobs.length + "."} subtext="Active Applications" icon={FileText} delay={0.1} />
                    <SeekerStat label="Live Audit" value="24" subtext="New Opportunities" icon={Clock} delay={0.2} />
                    <SeekerStat label="Final Stages" value="02." subtext="Interview Phase" icon={CheckCircle2} delay={0.3} />
                    <SeekerStat label="Match Rating" value="94%" subtext="Profile Optimization" icon={Zap} delay={0.4} />
                </div>

                {/* Main Action Area */}
                <div className="pt-8">
                    <AnimatePresence mode="wait">
                        {activeTab === 'browse' ? (
                            <motion.div
                                key="browse"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-12"
                            >
                                {/* Universal Search Bar */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 relative flex items-center bg-white border border-slate-200 rounded-[32px] shadow-sm focus-within:ring-4 focus-within:ring-green-100 focus-within:border-green-600 transition-all group overflow-hidden">
                                        <Search className="absolute left-8 w-6 h-6 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="SCAN REPOSITORY FOR ROLES OR SKILLS..."
                                            className="w-full pl-20 pr-8 py-8 bg-transparent text-slate-900 text-lg font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-white border border-slate-200 rounded-[32px] shadow-sm flex items-center gap-2">
                                            <button
                                                onClick={() => setViewMode('grid')}
                                                className={cn(
                                                    "w-16 h-full rounded-2xl flex items-center justify-center transition-all",
                                                    viewMode === 'grid' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-green-600"
                                                )}
                                            >
                                                <LayoutGrid className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={() => setViewMode('list')}
                                                className={cn(
                                                    "w-16 h-full rounded-2xl flex items-center justify-center transition-all",
                                                    viewMode === 'list' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-green-600"
                                                )}
                                            >
                                                <LayoutList className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                                            className={cn(
                                                "px-10 hover:bg-slate-50 transition-all uppercase text-[10px] font-bold tracking-widest flex items-center gap-4 rounded-[32px] border border-slate-200 bg-white shadow-sm",
                                                isFilterOpen && "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                                            )}
                                        >
                                            <SlidersHorizontal className="w-5 h-5" />
                                            Filters
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-16">
                                    {isFilterOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: 'auto' }}
                                            className="lg:w-80 flex-shrink-0"
                                        >
                                            <FilterSidebar filters={filters} setFilters={setFilters} />
                                        </motion.div>
                                    )}

                                    <div className="flex-1">
                                        <div className={cn(
                                            "grid gap-8",
                                            viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                                        )}>
                                            {isLoading ? (
                                                [1, 2, 4].map(i => <SkeletonJobCard key={i} />)
                                            ) : filteredJobs.length > 0 ? (
                                                filteredJobs.map((job, idx) => (
                                                    <JobCard
                                                        key={job.id}
                                                        job={job}
                                                        index={idx}
                                                        viewMode={viewMode}
                                                        onClick={(job) => setSelectedJob(job)}
                                                    />
                                                ))
                                            ) : (
                                                <div className="col-span-full py-32 border-4 border-dashed border-slate-100 rounded-[40px] text-center flex flex-col items-center justify-center gap-6">
                                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                                                        <Search className="w-8 h-8" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-black text-slate-300 uppercase tracking-tight">Zero Matches Detected</h3>
                                                        <p className="text-slate-400 text-sm font-medium mt-2">Adjust your parameters to expand the search vector.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="applications"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8"
                            >
                                <div className="grid gap-6">
                                    {appliedJobs.length > 0 ? appliedJobs.map((job, idx) => (
                                        <motion.div
                                            key={job.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="bg-white p-10 border border-slate-200 rounded-[32px] hover:border-green-600 hover:shadow-xl hover:shadow-green-600/5 transition-all flex flex-col sm:flex-row sm:items-center justify-between group cursor-pointer"
                                            onClick={() => setSelectedJob(job)}
                                        >
                                            <div className="flex items-center gap-8">
                                                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-slate-300 text-3xl group-hover:bg-green-600 group-hover:text-white transition-all uppercase">
                                                    {job.company?.[0]}
                                                </div>
                                                <div>
                                                    <h4 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-green-600 transition-colors uppercase">{job.title}</h4>
                                                    <div className="flex items-center gap-4 mt-2">
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.company}</span>
                                                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-12 mt-8 sm:mt-0">
                                                <div className="text-right hidden sm:block">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Protocol Status</p>
                                                    <span className="px-4 py-2 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded-full border border-blue-100">
                                                        Under Verification
                                                    </span>
                                                </div>
                                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 shadow-sm transition-all">
                                                    <ArrowUpRight className="w-8 h-8" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )) : (
                                        <div className="py-40 bg-white border border-dashed border-slate-200 rounded-[40px] text-center flex flex-col items-center justify-center gap-8 shadow-sm">
                                            <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center">
                                                <History className="w-10 h-10 text-slate-300" />
                                            </div>
                                            <div className="max-w-md mx-auto">
                                                <h3 className="text-2xl font-black text-slate-300 uppercase tracking-tight mb-2">No Active Protocols</h3>
                                                <p className="text-slate-400 font-medium leading-relaxed">
                                                    Initiate a search to start your career ascension.
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => setActiveTab('browse')}
                                                className="px-10 py-5 bg-green-600 text-white uppercase font-bold tracking-widest text-xs rounded-2xl hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all flex items-center gap-3"
                                            >
                                                Start Discovery
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <JobSlideOver
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
            />

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1.5px black;
                }
                .dark .outline-text {
                    -webkit-text-stroke: 1.5px white;
                }
            `}</style>
        </div>
    );
};

export default JobSeekerDashboard;
