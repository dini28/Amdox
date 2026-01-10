import { MessageSquare, Bell } from 'lucide-react';
import { cn } from '../../../utils/cn';
import DashboardHeader from '../common/DashboardHeader';

const SeekerMessagesHeader = ({ activeTab, setActiveTab }) => {
    return (
        <DashboardHeader
            title="Communication"
            highlight="Hub"
            description="Secure channel for professional discourse and negotiations."
            badges={[
                { text: 'Encrypted Protocol', highlight: true },
                { text: 'Direct Relay', highlight: false }
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
                    Messages
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
                    Notifications
                </button>
            </div>
        </DashboardHeader>
    );
};

export default SeekerMessagesHeader;
