import { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowRight, FilterX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from '../components/JobCard';
import FilterSidebar from '../components/FilterSidebar';
import JobSlideOver from '../components/JobSlideOver';
import Button from '../components/Button';
import { useJobContext } from '../context/JobContext';
import { useDebounce } from '../hooks/useDebounce';
import { cn } from '../utils/cn';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import ExploreHeader from '../components/dashboard/explore/ExploreHeader';

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
        locationType: [],
        datePosted: [],
        salaryRange: [0, 200]
    });

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
                job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                job.skills?.some(s => s.toLowerCase().includes(debouncedSearch.toLowerCase()));

            const matchesType = filters.type.length === 0 || filters.type.includes(job.type);

            // Allow simplified matching for demo purposes since mock data is limited
            const matchesLevel = filters.level.length === 0 || filters.level.includes(job.experience) || job.experience.includes(filters.level[0]?.split(' ')[0]);

            const matchesLocation = filters.locationType.length === 0 || filters.locationType.includes(job.location) || (filters.locationType.includes('Remote') && job.location === 'Remote');

            const jobSalary = parseInt(job.salary?.replace(/\D/g, '') || '0');
            const matchesSalary = jobSalary >= filters.salaryRange[0] && jobSalary <= filters.salaryRange[1];

            // Simplified date filtering
            const matchesDate = filters.datePosted.length === 0 || true; // Placeholder for actual date logic parsing '2 days ago'

            return matchesSearch && matchesType && matchesLevel && matchesLocation && matchesSalary && matchesDate;
        });
    }, [allJobs, debouncedSearch, filters]);

    const isAppplied = (jobId) => user?.appliedJobs?.includes(jobId);

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
        <DashboardContainer>

            {/* Header Section */}
            <ExploreHeader viewMode={viewMode} setViewMode={setViewMode} />

            <div className="max-w-full">
                <div className="flex flex-col lg:flex-row items-start gap-8">

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block w-80 flex-shrink-0 sticky top-32">
                        <FilterSidebar filters={filters} setFilters={setFilters} />
                    </div>

                    <div className="flex-1 min-w-0 space-y-6">
                        {/* Search Bar */}
                        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-green-100 focus-within:border-green-600 transition-all group overflow-hidden">
                            <Search className="absolute left-6 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="SEARCH ROLES, COMPANIES, OR KEYWORDS..."
                                className="w-full pl-16 pr-8 py-4 bg-transparent text-slate-900 text-sm font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide"
                            />
                            <div className="pr-4 lg:hidden">
                                <Button
                                    variant="text"
                                    size="sm"
                                    onClick={() => setIsFilterMobileOpen(true)}
                                    className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-green-600 transition-colors h-auto w-auto"
                                    icon={SlidersHorizontal}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-2">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {filteredJobs.length} Verified Records
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="skeleton"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={cn(
                                        "grid gap-6",
                                        viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                                    )}
                                >
                                    {[1, 2, 3, 4].map(i => <SkeletonJobCard key={i} />)}
                                </motion.div>
                            ) : filteredJobs.length > 0 ? (
                                <motion.div
                                    key="content"
                                    layout
                                    className={cn(
                                        "grid gap-6",
                                        viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
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
                                    className="flex flex-col items-center justify-center py-24 border border-dashed border-slate-200 rounded-[32px] bg-white text-center"
                                >
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                        <FilterX className="w-10 h-10 text-slate-300" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">No Matches Found</h3>
                                    <p className="text-slate-400 mt-2 text-sm font-medium max-w-xs mx-auto">
                                        Adjust your filter parameters or broaden your search criteria.
                                    </p>
                                    <Button
                                        variant="dark"
                                        size="sm"
                                        onClick={() => { setSearchTerm(''); setFilters({ type: [], level: [], locationType: [], datePosted: [], salaryRange: [0, 200] }); }}
                                        className="mt-8 px-8 py-3 text-[10px] tracking-widest uppercase rounded-xl shadow-lg shadow-slate-900/10 h-auto"
                                    >
                                        Clear All Filters
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                            className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Filters</h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setIsFilterMobileOpen(false)}
                                    className="p-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-400 h-auto w-auto"
                                    icon={ArrowRight}
                                />
                            </div>
                            <div className="p-6">
                                <FilterSidebar filters={filters} setFilters={setFilters} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </DashboardContainer>
    );
};

export default ExploreJobs;
