import { TrendingUp, Users, Target, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend, trendUp }) => (
    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
        <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400">
                <Icon className="w-4 h-4" />
            </div>
            {trend && (
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {trend}
                </span>
            )}
        </div>
        <div className="space-y-1">
            <h4 className="text-2xl font-black text-slate-900">{value}</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        </div>
    </div>
);

const SeekerAnalytics = () => {
    return (
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Insights</h3>
                <select className="bg-slate-50 border-none text-[10px] font-bold uppercase tracking-widest rounded-lg py-1 px-3 outline-none cursor-pointer">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <StatCard icon={Users} label="Profile Views" value="128" trend="+12%" trendUp={true} />
                <StatCard icon={Target} label="Success Rate" value="15%" trend="+2.4%" trendUp={true} />
                <StatCard icon={Award} label="Skill Matches" value="Top 5%" />
                <StatCard icon={TrendingUp} label="Recruiter Acts" value="24" trend="-5%" trendUp={false} />
            </div>
        </div>
    );
};

export default SeekerAnalytics;
