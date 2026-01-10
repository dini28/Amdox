import { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, LayoutList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from '../../JobCard';
import FilterSidebar from '../../FilterSidebar';
import { useJobContext } from '../../../context/JobContext';
import { useDebounce } from '../../../hooks/useDebounce';
import { cn } from '../../../utils/cn';

const SeekerBrowse = ({ onJobClick }) => {
    const { jobs: allJobs } = useJobContext();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);
    const [isLoading, setIsLoading] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({ type: [], level: [], salaryRange: [0, 200] });

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

    // Skeleton Loader
    const SkeletonJobCard = () => (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-pulse">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl" />
                <div className="w-8 h-8 bg-gray-100 rounded-lg" />
            </div>
            <div className="space-y-3 mb-6">
                <div className="h-6 w-3/4 bg-gray-100 rounded" />
                <div className="h-4 w-1/2 bg-gray-100 rounded" />
            </div>
            <div className="mt-auto h-10 w-full bg-gray-100 rounded-xl" />
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            {/* Search & Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1 relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-green-100 focus-within:border-green-600 transition-all group overflow-hidden max-w-2xl">
                    <Search className="absolute left-4 w-4 h-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="SEARCH ROLES, COMPANIES, OR KEYWORDS..."
                        className="w-full pl-10 pr-4 py-3 bg-transparent text-slate-900 text-sm font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide"
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={cn(
                            "px-6 py-3 border rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm",
                            isFilterOpen
                                ? "bg-green-600 text-white border-green-600"
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        )}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                    </button>
                    <div className="flex bg-white rounded-2xl p-1 border border-slate-200 items-center shadow-sm">
                        {[
                            { id: 'grid', icon: LayoutGrid },
                            { id: 'list', icon: LayoutList }
                        ].map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => setViewMode(mode.id)}
                                className={cn(
                                    "p-2.5 rounded-xl text-slate-400 transition-all",
                                    viewMode === mode.id && "bg-slate-100 text-green-600"
                                )}
                            >
                                <mode.icon className="w-5 h-5" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative">
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ opacity: 0, width: 0, marginRight: 0 }}
                            animate={{ opacity: 1, width: 320, marginRight: 0 }}
                            exit={{ opacity: 0, width: 0, marginRight: 0 }}
                            className="hidden lg:block h-fit"
                        >
                            <div className="w-80">
                                <FilterSidebar filters={filters} setFilters={setFilters} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {isFilterOpen && (
                    <div className="lg:hidden">
                        <FilterSidebar filters={filters} setFilters={setFilters} mobile onClose={() => setIsFilterOpen(false)} />
                    </div>
                )}

                <div className="flex-1">
                    <div className={cn(
                        "grid gap-6",
                        viewMode === 'grid'
                            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
                            : "grid-cols-1"
                    )}>
                        {isLoading ? (
                            [1, 2, 3, 4].map(i => <SkeletonJobCard key={i} />)
                        ) : filteredJobs.length > 0 ? (
                            filteredJobs.map((job, idx) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    index={idx}
                                    viewMode={viewMode}
                                    onClick={(job) => onJobClick(job)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-24 bg-white border border-slate-200 rounded-[32px] text-center shadow-sm">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">No positions found</h3>
                                <p className="text-slate-400 mt-2 text-sm font-medium">Reset filters to expand your search vector.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SeekerBrowse;
