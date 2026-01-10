import { jobs } from '../data/mockData';
import EmployerHeader from '../components/dashboard/employer/EmployerHeader';
import EmployerStats from '../components/dashboard/employer/EmployerStats';
import EmployerJobsTable from '../components/dashboard/employer/EmployerJobsTable';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';

const EmployerDashboard = () => {
    return (
        <DashboardContainer>

            {/* Hub Header Section */}
            <EmployerHeader />

            {/* Metrics Grid */}
            <EmployerStats />

            {/* Core Data View */}
            <EmployerJobsTable jobs={jobs} />

        </DashboardContainer>
    );
};

export default EmployerDashboard;
