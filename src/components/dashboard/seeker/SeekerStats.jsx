import { FileText, Zap, Clock, CheckCircle2, UserCheck } from 'lucide-react';
import DashboardStatsGrid from '../common/DashboardStatsGrid';
import { userProfile } from '../../../data/mockData';

const SeekerStats = ({ appliedCount }) => {
    const stats = [
        { label: "Active Applications", value: appliedCount.toString().padStart(2, '0'), subtext: "+2 this week", icon: FileText },
        { label: "New Matches", value: userProfile.stats?.matches.toString().padStart(2, '0') || "00", subtext: "High Priority", icon: Zap },
        { label: "Profile Views", value: userProfile.stats?.views.toString().padStart(2, '0') || "00", subtext: "Last 30 Days", icon: UserCheck },
        { label: "Completion", value: `${userProfile.completion}%`, subtext: "Profile Strength", icon: CheckCircle2 }
    ];

    return <DashboardStatsGrid stats={stats} />;
};

export default SeekerStats;
