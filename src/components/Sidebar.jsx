import {
    LayoutDashboard,
    Bookmark,
    MessageSquare,
    User,
    Settings,
    ChevronRight,
    Sparkles,
    Flame,
    Briefcase,
    Star,
    Search,
    Users
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, badge, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group block px-3 cursor-pointer"
        >
            <div className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-2xl overflow-hidden ${isActive
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}>
                {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50" />
                )}

                <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-white/20" : "bg-slate-100 group-hover:bg-slate-200"
                    }`}>
                    <Icon className="w-4 h-4" />
                </div>

                <span className={`text-sm font-semibold flex-1 ${isActive ? "text-white" : ""}`}>
                    {label}
                </span>

                {badge && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isActive
                        ? "bg-white/25 text-white backdrop-blur-sm"
                        : "bg-emerald-100 text-emerald-700"
                        }`}>
                        {badge}
                    </span>
                )}

                {isActive && (
                    <ChevronRight className="w-4 h-4 text-white/60" />
                )}
            </div>
        </div>
    );
};

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const streakDays = 7;

    const isEmployer = ['/employer', '/company-profile', '/post-job'].some(path => location.pathname.startsWith(path));

    const seekerItems = [
        { icon: LayoutDashboard, label: 'Seeker Hub', path: '/dashboard' },
        { icon: Search, label: 'Explore Jobs', path: '/explore' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: MessageSquare, label: 'Messages', badge: '3', path: '/messages' },
        { icon: Bookmark, label: 'Saved Jobs', path: '/saved' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    const employerItems = [
        { icon: Briefcase, label: 'Employer Hub', path: '/employer' },
        { icon: User, label: 'Company Profile', path: '/company-profile' },
        { icon: Users, label: 'Candidates', path: '/candidates' },
        { icon: MessageSquare, label: 'Messages', badge: '12', path: '/messages' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    const menuItems = isEmployer ? employerItems : seekerItems;

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <aside className="fixed left-0 top-20 bottom-0 w-80 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 flex flex-col overflow-y-auto z-40 pb-20">
            {/* User Profile Card */}
            <div className="p-6 m-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60">
                <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-500/25 ring-4 ring-white/50">
                            <span className="text-white font-bold text-lg">JD</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg" />
                    </div>
                    <div className="flex-1">
                        <p className="text-base font-bold text-slate-900 mb-1">John Doe</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold text-slate-600">Engineer.01</span>
                        </div>
                    </div>
                </div>

                {/* Profile Stats */}
                <div className="space-y-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/40">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-500">Profile Strength</span>
                        <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">85%</span>
                    </div>
                    <div className="relative h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-500"
                            style={{ width: '85%' }}
                        />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-orange-100 rounded-lg">
                                <Flame className="w-3.5 h-3.5 text-orange-500" />
                            </div>
                            <span className="text-xs font-semibold text-slate-600">{streakDays} Day Streak</span>
                        </div>
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-2">
                <div className="mb-3 px-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Navigation</h4>
                </div>
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <NavItem
                            key={index}
                            {...item}
                            isActive={location.pathname === item.path}
                            onClick={() => handleNavigation(item.path)}
                        />
                    ))}
                </div>
            </div>

            {/* Premium Upgrade Card */}
            <div className="p-6">
                <div className="relative p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                    {/* Animated gradient orbs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-500/20 to-fuchsia-600/20 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />

                    <div className="relative z-10">
                        <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg shadow-emerald-500/25">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>

                        <h4 className="text-lg font-bold text-white mb-2">Go Premium</h4>
                        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            Unlock advanced matching algorithms and exclusive opportunities worldwide.
                        </p>

                        <button className="w-full py-3.5 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 group/btn">
                            <span>Upgrade Now</span>
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 text-center border-t border-slate-100">
                <p className="text-xs text-slate-400 font-medium">
                    v2.0.1
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;