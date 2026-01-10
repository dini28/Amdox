import { Search, FileText, Users } from 'lucide-react';
import { cn } from '../../../utils/cn';
import DashboardHeader from '../common/DashboardHeader';

const SeekerHeader = ({ user, activeTab, setActiveTab }) => {
    return (
        <DashboardHeader
            title="Dashboard"
            highlight="Portal"
            description={`Welcome back, ${user.name.split(' ')[0]}. Manage your professional presence.`}
            badges={[
                { text: 'Executive Protocol', highlight: true },
                { text: 'Candidate Layer', highlight: false }
            ]}
        >
            {['browse', 'applications', 'profile'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                        "px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2",
                        activeTab === tab
                            ? "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
                            : "text-slate-500 hover:bg-slate-50"
                    )}
                >
                    {tab === 'browse' && <Search className="w-4 h-4" />}
                    {tab === 'applications' && <FileText className="w-4 h-4" />}
                    {tab === 'profile' && <Users className="w-4 h-4" />}
                    {tab === 'browse' ? 'Find Jobs' : tab === 'applications' ? 'History' : 'Profile'}
                </button>
            ))}
        </DashboardHeader>
    );
};

export default SeekerHeader;
