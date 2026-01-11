import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';
import logo_b from '../assets/logo_b.svg';

const HomeHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Find Jobs', path: '/dashboard/seeker' },
        { label: 'Hire Talent', path: '/dashboard/employer' },
        { label: 'About Us', path: '/about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img className='w-10 h-10' src={logo_b} alt="Logo" />
                    <div className="flex flex-col leading-none">
                        <span className="text-3xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'Iceland' }}>amdox</span>
                    </div>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className="text-2sm font-bold text-gray-600 hover:text-green-600 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                <Button
                    to="/login"
                    variant="dark"
                    size="sm"
                    className="hidden lg:flex"
                >
                    Login
                </Button>
                <Button
                    to="/register"
                    variant="dark"
                    size="sm"
                    className="hidden lg:flex"
                    icon={ArrowRight}
                >
                    Register
                </Button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="p-2 lg:hidden text-gray-600 hover:text-gray-900"
                >
                    {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 lg:hidden shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setShowMobileMenu(false)}
                            className="text-sm font-medium text-gray-600 hover:text-green-600 py-2"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                        <Button
                            to="/login"
                            variant="dark"
                            size='lg'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Login
                        </Button>
                        <Button
                            to="/register"
                            variant="dark"
                            size='lg'
                            icon={ArrowRight}
                            onClick={() => setShowMobileMenu(false)}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HomeHeader;
