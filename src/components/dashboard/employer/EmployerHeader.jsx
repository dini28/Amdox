import { BarChart3, Plus } from 'lucide-react';
import DashboardHeader from '../common/DashboardHeader';

const EmployerHeader = () => {
    return (
        <DashboardHeader
            title="Talent"
            highlight="Acquisition"
            description="Architecting your team with surgical precision."
            badges={[
                { text: 'Employer Protocol', highlight: true },
                { text: 'Talent Acquisition Layer', highlight: false }
            ]}
        >
            <button className="px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl text-slate-500 hover:bg-slate-50 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
            </button>
            <button className="px-8 py-3 bg-green-600 text-white shadow-lg shadow-green-600/20 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2 hover:bg-green-700">
                <Plus className="w-4 h-4" />
                New Position
            </button>
        </DashboardHeader>
    );
};

export default EmployerHeader;
