import { Eye, MessageSquare, Briefcase, Bell } from 'lucide-react';
import { activityFeed } from '../../../data/mockData';

const getIcon = (type) => {
    switch (type) {
        case 'view': return Eye;
        case 'message': return MessageSquare;
        case 'status': return Briefcase;
        default: return Bell;
    }
};

const SeekerActivityFeed = () => {
    return (
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-8">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-6">Recent Activity</h3>
            <div className="space-y-6">
                {activityFeed.map((item, index) => {
                    const Icon = getIcon(item.type);
                    return (
                        <div key={item.id} className="relative pl-6 border-l border-slate-100 last:border-0">
                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-white"></div>
                            <div className="flex gap-4 items-start group cursor-pointer">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-green-600 group-hover:bg-green-50 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                                        {item.message}
                                    </p>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-1 block">
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SeekerActivityFeed;
