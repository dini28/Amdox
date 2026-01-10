import { Bell, CheckCircle, Clock, Sparkles, AlertTriangle } from 'lucide-react';

const mockNotifications = [
    {
        id: 1,
        title: "Application Reviewed",
        message: "Your application for Senior Developer at TechFlow has been reviewed.",
        time: "10m ago",
        type: "success",
        read: false
    },
    {
        id: 2,
        title: "New Job Match",
        message: "We found a new role that matches your 'Executive Protocol' criteria.",
        time: "1h ago",
        type: "info",
        read: false
    },
    {
        id: 3,
        title: "Profile Incomplete",
        message: "Please add your latest project to reach 100% profile completion.",
        time: "3h ago",
        type: "warning",
        read: true
    },
    {
        id: 4,
        title: "System Update",
        message: "The platform has been updated with new security features.",
        time: "1d ago",
        type: "system",
        read: true
    }
];

const NotificationsList = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'success': return CheckCircle;
            case 'warning': return AlertTriangle;
            case 'system': return Sparkles;
            default: return Clock;
        }
    };

    const getColors = (type) => {
        switch (type) {
            case 'success': return "bg-green-50 text-green-600 border-green-100";
            case 'warning': return "bg-amber-50 text-amber-600 border-amber-100";
            case 'system': return "bg-slate-50 text-slate-600 border-slate-200";
            default: return "bg-blue-50 text-blue-600 border-blue-100";
        }
    };

    return (
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden min-h-[600px]">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">System Logs</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Activity & Alerts</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-600 text-white text-[10px] font-bold rounded-lg uppercase tracking-widest shadow-lg shadow-green-600/20">
                        2 Unread
                    </span>
                    <button className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-widest hover:bg-slate-50 transition-colors">
                        Mark All Read
                    </button>
                </div>
            </div>

            <div className="divide-y divide-slate-50">
                {mockNotifications.map((notif) => {
                    const Icon = getIcon(notif.type);
                    const colors = getColors(notif.type);

                    return (
                        <div key={notif.id} className={`p-6 hover:bg-slate-50 transition-all flex gap-6 ${!notif.read ? 'bg-slate-50/60' : ''}`}>
                            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${colors}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">{notif.title}</h4>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{notif.time}</span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{notif.message}</p>
                            </div>
                            {!notif.read && (
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-600 shadow-sm ring-4 ring-green-50"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="p-8 border-t border-slate-100 bg-slate-50/50 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">End of Log</p>
            </div>
        </div>
    );
};

export default NotificationsList;
