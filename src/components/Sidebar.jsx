import {
    LayoutDashboard,
    Bookmark,
    MessageSquare,
    User,
    Settings,
    ChevronRight,
    Briefcase,
    Search,
    Users,
    Zap
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, badge, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full group flex items-center gap-3 px-4 py-3.5 transition-all duration-300 relative ${isActive
                ? "bg-emerald-50/50 text-emerald-900"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
        >
            {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-r-full" />
            )}

            <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"}`} />

            <span className={`text-sm font-semibold tracking-wide ${isActive ? "font-bold" : ""}`}>
                {label}
            </span>

            {badge && (
                <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                    }`}>
                    {badge}
                </span>
            )}
        </button>
    );
};

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isEmployer = ['/employer', '/company-profile', '/post-job'].some(path => location.pathname.startsWith(path));

    const seekerItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Search, label: 'Explore', path: '/explore' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: MessageSquare, label: 'Messages', badge: '3', path: '/messages' },
        { icon: Bookmark, label: 'Saved', path: '/saved' },
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
        <aside className="fixed left-0 top-20 bottom-0 w-72 bg-white border-r border-slate-100 hidden lg:flex flex-col z-40 pb-10">

            {/* Navigation */}
            <div className="flex-1 py-8">
                <div className="mb-4 px-6 flex items-center justify-between">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Menu</h4>
                </div>
                <div className="space-y-0.5">
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
            <div className="p-5">
                <div className="relative p-5 bg-gradient-to-br from-white to-slate-50 rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    {/* Subtle accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10">
                        <div className="flex mb-3">
                            <div className="w-full flex items-center justify-between gap-2">
                                <div className='flex items-center gap-1'>
                                    <div className="p-1.5 bg-emerald-100 rounded-md border border-emerald-600">
                                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                                    </div>
                                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Pro</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Upgrade Plan</h4>
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-500 mb-4 leading-relaxed font-medium">
                            Unlock advanced features and get 10x more reach.
                        </p>

                        <button className="w-full py-2.5 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group/btn">
                            <span>Upgrade</span>
                            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;