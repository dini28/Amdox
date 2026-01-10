import { LayoutGrid, LayoutList } from 'lucide-react';
import { cn } from '../../../utils/cn';
import DashboardHeader from '../common/DashboardHeader';

const ExploreHeader = ({ viewMode, setViewMode }) => {
    return (
        <DashboardHeader
            title="Explore"
            highlight="Positions"
            description="Access the absolute architecture for high-potential careers."
            badges={[
                { text: 'Global Protocol', highlight: true },
                { text: 'Opportunity Matrix', highlight: false }
            ]}
        >
            <button
                onClick={() => setViewMode('grid')}
                className={cn(
                    "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2",
                    viewMode === 'grid'
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
                        : "text-slate-500 hover:bg-slate-50"
                )}
            >
                <LayoutGrid className="w-4 h-4" />
                Grid
            </button>
            <button
                onClick={() => setViewMode('list')}
                className={cn(
                    "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2",
                    viewMode === 'list'
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
                        : "text-slate-500 hover:bg-slate-50"
                )}
            >
                <LayoutList className="w-4 h-4" />
                List
            </button>
        </DashboardHeader>
    );
};

export default ExploreHeader;
