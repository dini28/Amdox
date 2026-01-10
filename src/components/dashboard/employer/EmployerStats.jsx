import { Briefcase, Users, MessageSquare, TrendingUp } from 'lucide-react';
import DashboardStatsGrid from '../common/DashboardStatsGrid';

const EmployerStats = () => {
    const stats = [
        { label: "Active Roles", value: "08.", subtext: "+2 Priority", icon: Briefcase },
        { label: "Talent Pool", value: "1.2k", subtext: "+18% Growth", icon: Users },
        { label: "Review Queue", value: "12.", subtext: "4 Critical", icon: MessageSquare },
        { label: "Sync Rate", value: "85%", subtext: "On Target", icon: TrendingUp }
    ];

    return <DashboardStatsGrid stats={stats} />;
};

export default EmployerStats;
