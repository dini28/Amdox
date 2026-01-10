import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import JobSlideOver from '../components/JobSlideOver';
import { useJobContext } from '../context/JobContext';
import SeekerHeader from '../components/dashboard/seeker/SeekerHeader';
import SeekerStats from '../components/dashboard/seeker/SeekerStats';
import SeekerBrowse from '../components/dashboard/seeker/SeekerBrowse';
import SeekerApplications from '../components/dashboard/seeker/SeekerApplications';
import SeekerProfile from '../components/dashboard/seeker/SeekerProfile';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';

const JobSeekerDashboard = () => {
    const { user, jobs: allJobs } = useJobContext();
    const appliedJobs = allJobs.filter(job => user.appliedJobs.includes(job.id));

    const [activeTab, setActiveTab] = useState('browse');
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <DashboardContainer>

            {/* Header Section */}
            <SeekerHeader
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Stats Grid */}
            <SeekerStats appliedCount={appliedJobs.length} />

            {/* Main Content Area */}
            <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'browse' ? (
                        <SeekerBrowse
                            key="browse"
                            onJobClick={setSelectedJob}
                        />
                    ) : activeTab === 'applications' ? (
                        <SeekerApplications
                            key="applications"
                            appliedJobs={appliedJobs}
                            onJobClick={setSelectedJob}
                            onInitSearch={() => setActiveTab('browse')}
                        />
                    ) : (
                        <SeekerProfile key="profile" />
                    )}
                </AnimatePresence>
            </div>

            <JobSlideOver
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
            />
        </DashboardContainer>
    );
};

export default JobSeekerDashboard;
