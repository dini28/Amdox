import { useState } from 'react';
import { Search, MoreVertical, Reply, CheckCircle2, ArrowLeft } from 'lucide-react';

const seekerMockMessages = [
    {
        id: 1,
        sender: "Sarah Jenkins",
        role: "Senior Recruiter @ TechFlow",
        avatar: "S",
        lastMessage: "The team was very impressed with your portfolio...",
        time: "10m ago",
        unread: true,
        bg: "bg-blue-50 text-blue-600"
    },
    {
        id: 2,
        sender: "Michael Chen",
        role: "Head of Engineering @ Innovate Inc",
        avatar: "M",
        lastMessage: "Are you available for a quick sync tomorrow?",
        time: "2h ago",
        unread: false,
        bg: "bg-purple-50 text-purple-600"
    },
    {
        id: 3,
        sender: "System Notification",
        role: "Amdox Platform",
        avatar: "A",
        lastMessage: "Your profile has appeared in 12 new searches.",
        time: "1d ago",
        unread: true,
        bg: "bg-green-50 text-green-600"
    }
];

const employerMockMessages = [
    {
        id: 1,
        sender: "David Kim",
        role: "Senior Full Stack Developer",
        avatar: "D",
        lastMessage: "I've attached my updated resume and portfolio...",
        time: "5m ago",
        unread: true,
        bg: "bg-emerald-50 text-emerald-600"
    },
    {
        id: 2,
        sender: "Emily Davis",
        role: "Product Designer",
        avatar: "E",
        lastMessage: "Thank you for the opportunity. I am available for...",
        time: "1h ago",
        unread: false,
        bg: "bg-indigo-50 text-indigo-600"
    },
    {
        id: 3,
        sender: "James Wilson",
        role: "Backend Engineer",
        avatar: "J",
        lastMessage: "Could you clarify the tech stack requirements regarding...",
        time: "3h ago",
        unread: true,
        bg: "bg-amber-50 text-amber-600"
    }
];

const MessagesList = ({ mode = 'seeker' }) => {
    const [selectedId, setSelectedId] = useState(null);
    const messages = mode === 'employer' ? employerMockMessages : seekerMockMessages;

    const activeMessage = messages.find(m => m.id === selectedId);

    return (
        <div className="flex flax-col lg:flex-row gap-8 min-h-[600px] border border-slate-200 rounded-[32px] bg-white overflow-hidden shadow-sm">

            {/* Conversations Sidebar */}
            <div className={`w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50 flex flex-col ${selectedId ? 'hidden lg:flex' : 'flex'}`}>
                <div className="p-6 border-b border-slate-200">
                    <div className="relative flex items-center bg-white border border-slate-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-green-600 transition-all">
                        <Search className="absolute left-4 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={mode === 'employer' ? "SEARCH CANDIDATES..." : "SEARCH INBOX..."}
                            className="w-full pl-10 pr-4 py-3 bg-transparent text-xs font-bold placeholder:text-slate-300 outline-none uppercase tracking-wide text-slate-900"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            onClick={() => setSelectedId(msg.id)}
                            className={`p-6 border-b border-slate-100 cursor-pointer transition-all hover:bg-white group ${selectedId === msg.id ? 'bg-white border-l-4 border-l-green-600 shadow-sm' : 'border-l-4 border-l-transparent'}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${msg.bg}`}>
                                    {msg.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className={`text-sm font-bold ${msg.unread ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {msg.sender}
                                        </h4>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">{msg.time}</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-tight mb-2 truncate">{msg.role}</p>
                                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{msg.lastMessage}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 flex-col bg-slate-50 ${selectedId ? 'flex' : 'hidden lg:flex'}`}>
                {activeMessage ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-6 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="lg:hidden p-2 -ml-2 hover:bg-slate-50 rounded-xl text-slate-400"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${activeMessage.bg}`}>{activeMessage.avatar}</div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{activeMessage.sender}</h3>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full" /> Online
                                    </p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-8 overflow-y-auto space-y-6">
                            <div className="flex justify-center">
                                <span className="px-4 py-1 bg-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wide">Today</span>
                            </div>

                            {/* Received */}
                            <div className="flex items-start gap-4 max-w-xl">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs mt-1 ${activeMessage.bg}`}>{activeMessage.avatar}</div>
                                <div>
                                    <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-slate-600 leading-relaxed text-sm">
                                        <p>{activeMessage.lastMessage}</p>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-300 mt-2 block uppercase">10:42 AM</span>
                                </div>
                            </div>

                            {/* Sent (Mock) */}
                            <div className="flex flex-col items-end gap-2 max-w-xl ml-auto">
                                <div className="bg-green-600 p-6 rounded-2xl rounded-tr-none shadow-lg shadow-green-600/10 text-white leading-relaxed text-sm">
                                    <p>{mode === 'employer' ? "Great, let's schedule a technical interview." : "Thanks for the update! I am available."}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-300 uppercase">10:45 AM</span>
                                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-6 bg-white border-t border-slate-200">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                                />
                                <button className="px-6 bg-slate-900 text-white rounded-2xl hover:bg-green-600 transition-colors flex items-center justify-center shadow-lg shadow-slate-900/10">
                                    <Reply className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                            <MoreVertical className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Select a Thread</h3>
                        <p className="text-slate-400 mt-2 text-sm font-medium">Choose a conversation from the sidebar to start messaging.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagesList;
