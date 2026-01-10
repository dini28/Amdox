import { MessageSquare, Bell, Radio } from 'lucide-react';
import { cn } from '../../../utils/cn';
import DashboardHeader from '../common/DashboardHeader';

const EmployerMessagesHeader = ({ activeTab, setActiveTab }) => {
    return (
        <DashboardHeader
            title="Talent"
            highlight="Relay"
            description="Direct line to high-value candidates and application queries."
            badges={[
                { text: 'Corporate Protocol', highlight: true },
                { text: 'Priority Channel', highlight: false }
            ]}
        >
            <div className="flex gap-2">
                <button
                    onClick={() => setActiveTab('messages')}
                    className={cn(
                        "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2",
                        activeTab === 'messages'
                            ? "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
                            : "text-slate-500 hover:bg-slate-50"
                    )}
                >
                    <MessageSquare className="w-4 h-4" />
                    Inbox
                </button>
                <button
                    onClick={() => setActiveTab('notifications')}
                    className={cn(
                        "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2",
                        activeTab === 'notifications'
                            ? "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
                            : "text-slate-500 hover:bg-slate-50"
                    )}
                >
                    <Bell className="w-4 h-4" />
                    Alerts
                </button>
                <button
                    className="px-6 py-3 bg-slate-900 text-white shadow-lg shadow-slate-900/20 text-xs font-bold uppercase tracking-widest transition-all rounded-xl flex items-center gap-2 hover:bg-slate-800"
                >
                    <Radio className="w-4 h-4" />
                    Broadcast
                </button>
            </div>
        </DashboardHeader>
    );
};

export default EmployerMessagesHeader;
