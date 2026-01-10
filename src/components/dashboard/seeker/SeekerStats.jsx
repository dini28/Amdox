import { FileText, Zap, Clock, CheckCircle2 } from 'lucide-react';
import DashboardStatsGrid from '../common/DashboardStatsGrid';

const SeekerStats = ({ appliedCount }) => {
    const stats = [
        { label: "Active Applications", value: appliedCount, subtext: "+2 this week", icon: FileText },
        { label: "New Matches", value: "24", subtext: "High Priority", icon: Zap },
        { label: "Interviews", value: "02", subtext: "Action Required", icon: Clock },
        { label: "Profile Index", value: "94%", subtext: "Excellent", icon: CheckCircle2 }
    ];

    return <DashboardStatsGrid stats={stats} />;
};

export default SeekerStats;
