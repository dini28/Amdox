import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Search, Bell, User, Settings,
    FileText, TrendingUp, Clock, Sparkles,
    Command, Plus, CheckCircle, ChevronDown,
    Calendar, Bookmark, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo_b from '../assets/logo_b.svg';

const useJobContext = () => ({
    user: { name: 'Sarah Johnson', role: 'Senior Developer', level: 12 },
    notifications: [
        {
            id: 1,
            read: false,
            title: 'Application Update',
            message: 'Your application was reviewed',
            time: '5m ago',
            type: 'success'
        },
        {
            id: 2,
            read: false,
            title: 'New Job Match',
            message: 'Senior Developer position available',
            time: '1h ago',
            type: 'info'
        },
        {
            id: 3,
            read: false,
            title: 'Interview Scheduled',
            message: 'Interview set for tomorrow at 2 PM',
            time: '3h ago',
            type: 'warning'
        },
        {
            id: 4,
            read: true,
            title: 'Profile Viewed',
            message: 'A recruiter viewed your profile',
            time: '1d ago',
            type: 'info'
        },
    ]
});

const Header = () => {
    const { user, notifications } = useJobContext();
    const navigate = useNavigate();
    const location = useLocation(); // context-aware
    const isEmployer = ['/employer', '/company-profile', '/post-job'].some(path => location.pathname.startsWith(path));
    const [isScrolled, setIsScrolled] = useState(false);
    // ... rest of state
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [activeNav, setActiveNav] = useState('explore');
    const [searchQuery, setSearchQuery] = useState('');

    const notifRef = useRef(null);
    const userMenuRef = useRef(null);

    // ... useEffects (lines 61-94)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setShowCommandPalette(true);
            }
            if (e.key === 'Escape') {
                setShowCommandPalette(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const unreadCount = notifications.filter(n => !n.read).length;

    const seekerItems = [
        { label: 'Explore', path: '/explore' },
        { label: 'My Jobs', path: '/dashboard' },
        { label: 'Messages', path: '/messages', badge: 3 },
        { label: 'Elite Pro', path: '/pro', special: true },
    ];

    const employerItems = [
        { label: 'Employer Hub', path: '/employer' },
        { label: 'Candidates', path: '/candidates' },
        { label: 'Post Job', path: '/post-job', special: true },
        { label: 'Messages', path: '/employer/messages', badge: 12 },
    ];

    const navItems = isEmployer ? employerItems : seekerItems;

    // ... quickActions and userMenuItems (lines 105-118)
    const quickActions = [
        { icon: Plus, label: 'New Application', shortcut: 'N', path: '/new-application' },
        { icon: Search, label: 'Search Jobs', shortcut: '/', path: '/search' },
        { icon: FileText, label: 'Upload Resume', shortcut: 'U', path: '/upload-resume' },
        { icon: Calendar, label: 'Schedule Interview', shortcut: 'I', path: '/schedule' },
    ];

    const userMenuItems = [
        { icon: User, label: 'My Profile', path: '/profile' },
        { icon: FileText, label: 'Applications', path: '/applications' },
        { icon: Bookmark, label: 'Saved Jobs', path: '/saved' },
        { icon: TrendingUp, label: 'Career Insights', path: '/insights' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'success': return CheckCircle;
            case 'warning': return Clock;
            case 'info': return Sparkles;
            default: return Bell;
        }
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white'}`}>
                <div className="flex items-center gap-8 flex-1">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-1 group">
                        <img className='w-10 h-10' src={logo_b} alt="Logo" />
                        <div className="flex flex-col leading-none">
                            <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Iceland' }}>amdox</span>
                            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Careers</span>
                        </div>
                    </Link>

                    {/* Spacer */}
                    <div className="hidden md:flex flex-1" />

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setActiveNav(item.path)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all ${item.special
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:from-green-600 hover:to-green-700'
                                    : activeNav === item.path
                                        ? 'text-green-600 bg-green-50 '
                                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                                    }`}
                            >
                                {item.label}
                                {item.badge && !item.special && (
                                    <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-green-100 text-green-700 rounded-full">{item.badge}</span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <div className="relative" ref={notifRef}>
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 text-gray-600 hover:text-green-600 transition-all"
                        >
                            <Bell className="w-5 h-5" />
                            {unreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg text-[10px] font-bold text-white">
                                    {unreadCount}
                                </span>
                            )}
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-4 w-96 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                                <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Notifications</h3>
                                    <p className="text-xs text-gray-500 mt-1">{unreadCount} unread</p>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {notifications.map((notif) => {
                                        const NotifIcon = getNotificationIcon(notif.type);
                                        return (
                                            <div
                                                key={notif.id}
                                                className={`p-5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 ${!notif.read ? 'bg-green-50/50' : ''}`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                                                        }`}>
                                                        <NotifIcon className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-semibold text-sm text-gray-900">{notif.title}</p>
                                                        <p className="text-xs text-gray-600 mt-1">{notif.message}</p>
                                                        <span className="text-xs text-gray-400 mt-2 block">{notif.time}</span>
                                                    </div>
                                                    {!notif.read && (
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <button className="w-full py-4 bg-gray-50 text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-all border-t border-gray-200">
                                    View All
                                </button>
                            </div>
                        )}
                    </div>

                    {/* User Menu */}
                    <div className="relative" ref={userMenuRef}>
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-3 group"
                        >
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{user.role}</p>
                            </div>
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-green-500/20">
                                <span className="text-white font-bold text-sm">SJ</span>
                            </div>
                        </button>

                        {showUserMenu && (
                            <div className="absolute right-0 mt-4 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                                <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
                                    <p className="text-xl font-bold">{user.name}</p>
                                    <p className="text-sm text-green-100 mt-2">{user.role}</p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="flex-1 h-2 bg-green-400/30 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-white rounded-full"></div>
                                        </div>
                                        <span className="text-xs font-semibold">Level {user.level}</span>
                                    </div>
                                </div>
                                <div className="p-2">
                                    {userMenuItems.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => {
                                                navigate(item.path);
                                                setShowUserMenu(false);
                                            }}
                                            className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 text-gray-700 hover:text-green-600 rounded-xl transition-all group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className="w-5 h-5" />
                                                <span className="text-sm font-semibold">{item.label}</span>
                                            </div>
                                            <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                                <div className="p-3 border-t border-gray-200 bg-gray-50">
                                    <button className="w-full py-4 text-center text-red-600 text-xs font-bold uppercase tracking-wider hover:bg-red-50 rounded-xl transition-all">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 text-gray-600 hover:text-green-600 lg:hidden transition-all"
                    >
                        {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl overflow-hidden lg:hidden z-40"
                    >
                        <div className="p-6 space-y-4">
                            {/* User Info Mobile */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                                    <span className="text-white font-bold text-lg">{user.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.role}</p>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => {
                                            setActiveNav(item.path);
                                            setShowMobileMenu(false);
                                        }}
                                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${activeNav === item.path
                                            ? 'bg-green-50 text-green-700 font-bold border border-green-200'
                                            : 'bg-white text-gray-600 font-semibold border border-gray-100 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span>{item.label}</span>
                                        {item.badge && (
                                            <span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                        {item.special && (
                                            <Sparkles className="w-4 h-4 text-green-600" />
                                        )}
                                    </Link>
                                ))}
                            </div>

                            {/* Quick Actions Grid */}
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <Link to="/settings" onClick={() => setShowMobileMenu(false)} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-100">
                                    <Settings className="w-4 h-4" />
                                    <span>Settings</span>
                                </Link>
                                <button className="flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-sm font-bold text-red-600 hover:bg-red-100">
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Command Palette */}
            {showCommandPalette && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCommandPalette(false)} />
                    <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-4">
                                <Command className="w-6 h-6 text-green-600" />
                                <input
                                    type="text"
                                    placeholder="Type a command or search..."
                                    autoFocus
                                    className="flex-1 bg-transparent text-2xl font-bold text-gray-900 placeholder-gray-400 focus:outline-none"
                                />
                                <kbd className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600">
                                    ESC
                                </kbd>
                            </div>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => {
                                        navigate(action.path);
                                        setShowCommandPalette(false);
                                    }}
                                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:border-green-200 rounded-xl transition-all border border-gray-200 group"
                                >
                                    <div className="flex items-center gap-3">
                                        <action.icon className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
                                        <span className="text-sm font-semibold text-gray-900">{action.label}</span>
                                    </div>
                                    <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-600">
                                        {action.shortcut}
                                    </kbd>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;