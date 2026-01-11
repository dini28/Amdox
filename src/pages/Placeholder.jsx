import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import DashboardHeader from '../components/dashboard/common/DashboardHeader';

const Placeholder = ({ title }) => {
    return (
        <DashboardContainer>
            <DashboardHeader
                title={title || "Coming Soon"}
                highlight="Development"
                description="This feature is currently under active development."
            />
            <div className="flex items-center justify-center p-20 bg-slate-50 border border-slate-200 border-dashed rounded-[32px]">
                <p className="text-slate-400 font-bold uppercase tracking-widest">Construction in progress</p>
            </div>
        </DashboardContainer>
    );
};

export default Placeholder;
