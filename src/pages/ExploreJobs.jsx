import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, ChevronDown, FilterX, Sparkles, ArrowRight, Grid3X3, List, LayoutGrid, LayoutList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from '../components/JobCard';
import FilterSidebar from '../components/FilterSidebar';
import SkeletonJobCard from '../components/SkeletonJobCard';
import JobSlideOver from '../components/JobSlideOver';
import { useJobContext } from '../context/JobContext';
import { useDebounce } from '../hooks/useDebounce';
import { cn } from '../utils/cn';

const ExploreJobs = () => {
    const { jobs: allJobs, user } = useJobContext();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isFilterMobileOpen, setIsFilterMobileOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');

    // Filter State
    const [filters, setFilters] = useState({
        type: [],
        level: [],
        salaryRange: [0, 200] // k
    });

    // Elite simulation of search/filter delay
    useEffect(() => {
        if (searchTerm !== debouncedSearch) setIsLoading(true);
        else {
            const timer = setTimeout(() => setIsLoading(false), 400);
            return () => clearTimeout(timer);
        }
    }, [debouncedSearch, searchTerm]);

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

    const isAppplied = (jobId) => user?.appliedJobs?.includes(jobId);

    return (
        <div className="min-h-screen bg-slate-50 transition-colors duration-500 font-sans">

            {/* Header Section */}
            <div className="pt-32 pb-16 px-8 sm:px-12 lg:px-16 border-b border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest">Protocol 01</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Advanced Talent Acquisition</span>
                        </div>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] uppercase">
                            Global <br />
                            <span className="text-green-600">Repository</span>
                        </h1>
                        <p className="mt-8 text-lg font-medium text-slate-500 max-w-xl leading-relaxed">
                            Access the absolute architecture for high-potential careers. Vetted executive opportunities.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
                <div className="flex flex-col lg:flex-row items-start gap-12">

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block w-80 flex-shrink-0 sticky top-32">
                        <FilterSidebar filters={filters} setFilters={setFilters} />
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Control Bar */}
                        <div className="flex flex-col gap-6 mb-12">
                            {/* Search Bar */}
                            <div className="relative flex items-center bg-white border border-slate-200 rounded-[32px] shadow-sm focus-within:ring-4 focus-within:ring-green-100 focus-within:border-green-600 transition-all group overflow-hidden">
                                <Search className="absolute left-6 w-6 h-6 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="EXECUTE SEARCH BY TITLE, SKILL, OR ENTITY..."
                                    className="w-full pl-16 pr-8 py-6 bg-transparent text-slate-900 text-lg font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide"
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {filteredJobs.length} Verified Records Found
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={cn(
                                                "p-3 rounded-xl transition-all",
                                                viewMode === 'grid' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-green-600"
                                            )}
                                        >
                                            <LayoutGrid className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={cn(
                                                "p-3 rounded-xl transition-all",
                                                viewMode === 'list' ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-green-600"
                                            )}
                                        >
                                            <LayoutList className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setIsFilterMobileOpen(true)}
                                        className="lg:hidden flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-2xl shadow-sm"
                                    >
                                        <SlidersHorizontal className="w-4 h-4" />
                                        Filters
                                    </button>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence mode="popLayout">
                            {isLoading ? (
                                <motion.div
                                    key="skeleton"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={cn(
                                        "grid gap-8",
                                        viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                                    )}
                                >
                                    {[1, 2, 3, 4].map(i => <SkeletonJobCard key={i} />)}
                                </motion.div>
                            ) : filteredJobs.length > 0 ? (
                                <motion.div
                                    key="content"
                                    layout
                                    className={cn(
                                        "grid gap-8",
                                        viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                                    )}
                                >
                                    {filteredJobs.map((job, idx) => (
                                        <JobCard
                                            key={job.id}
                                            job={job}
                                            index={idx}
                                            viewMode={viewMode}
                                            onClick={setSelectedJob}
                                            isApplied={isAppplied(job.id)}
                                            isSaved={user?.savedJobs?.includes(job.id)}
                                        />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center py-32 border-4 border-dashed border-slate-200 rounded-[48px] bg-slate-50/50"
                                >
                                    <div className="w-24 h-24 bg-white border border-slate-200 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                                        <FilterX className="w-10 h-10 text-slate-300" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-300 uppercase tracking-tight">No Results Found</h3>
                                    <p className="text-slate-400 mt-4 text-sm font-bold uppercase tracking-widest max-w-xs text-center leading-relaxed">
                                        The search query returned zero matches within the current repository parameters.
                                    </p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setFilters({ type: [], level: [], salaryRange: [0, 200] }); }}
                                        className="mt-10 px-10 py-5 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all rounded-2xl shadow-xl shadow-slate-900/10"
                                    >
                                        Rest Parameters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {filteredJobs.length > 0 && (
                            <div className="mt-20 flex justify-center">
                                <button className="px-12 py-6 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all rounded-2xl shadow-xl shadow-slate-900/20 group">
                                    Load More Records
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <JobSlideOver
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                isApplied={selectedJob ? isAppplied(selectedJob.id) : false}
                isSaved={user?.savedJobs?.includes(selectedJob?.id)}
            />

            {/* Mobile Filter Modal */}
            <AnimatePresence>
                {isFilterMobileOpen && (
                    <div className="fixed inset-0 z-[100] lg:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                            onClick={() => setIsFilterMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
                        >
                            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Filters</h2>
                                <button
                                    onClick={() => setIsFilterMobileOpen(false)}
                                    className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-400"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-8">
                                <FilterSidebar filters={filters} setFilters={setFilters} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ExploreJobs;
