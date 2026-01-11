import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Briefcase, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import logo_b from '../assets/logo_b.svg'
import login_right from '../assets/login_right.jpg'
import user1 from '../assets/User/user1.jpg'
import user2 from '../assets/User/user2.jpg'
import user3 from '../assets/User/user3.jpg'
import user4 from '../assets/User/user4.jpg'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState('seeker'); // 'seeker' or 'employer'

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(formData.email, formData.password, role);
            if (role === 'employer') {
                navigate('/dashboard/employer');
            } else {
                navigate('/dashboard/seeker');
            }
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen bg-white flex">

            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-16">
                <div className="w-full max-w-md space-y-8">

                    <div className="text-center lg:text-center">
                        <div className="flex items-center justify-center">
                            <img src={logo_b} alt="Logo" className="w-10 h-10 mb-4" />
                            <Link to="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
                                <h2
                                    className="text-3xl font-black tracking-tighter text-emerald-950"
                                    style={{ fontFamily: 'Iceland' }}
                                >
                                    amdox
                                </h2>
                            </Link>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">Welcome Back</h1>
                        <p className="text-slate-500 text-lg">Sign in to manage your professional journey.</p>
                    </div>

                    {/* Role Toggle */}
                    <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                        <Button
                            onClick={() => setRole('seeker')}
                            variant={role === 'seeker' ? 'text' : 'text'}
                            className={`flex-1 justify-center rounded-xl text-sm font-bold ${role === 'seeker'
                                ? 'bg-white text-emerald-950 shadow-md shadow-slate-200/50 ring-1 ring-black/5'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                                }`}
                            icon={User}
                            iconPosition="left"
                        >
                            Job Seeker
                        </Button>
                        <Button
                            onClick={() => setRole('employer')}
                            variant={role === 'employer' ? 'text' : 'text'}
                            className={`flex-1 justify-center rounded-xl text-sm font-bold ${role === 'employer'
                                ? 'bg-white text-emerald-950 shadow-md shadow-slate-200/50 ring-1 ring-black/5'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                                }`}
                            icon={Briefcase}
                            iconPosition="left"
                        >
                            Employer
                        </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    type="email"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                                <span className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors">Remember me</span>
                            </label>
                            <a href="#" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot Password?</a>
                        </div>

                        <Button
                            type="submit"
                            loading={isLoading}
                            fullWidth
                            size="xl"
                            variant="primary"
                            className="mt-2 rounded-xl"
                            icon={!isLoading ? ArrowRight : null}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </Button>
                    </form>

                    <div className="pt-6 border-t border-slate-100 text-center lg:text-left lg:hidden">
                        <p className="text-sm text-slate-500 mb-6">Don't have an account?</p>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                to="/register/seeker"
                                variant="outline"
                                size="sm"
                                className="justify-center border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-emerald-900 hover:border-emerald-200"
                                icon={User}
                                iconPosition="left"
                            >
                                Job Seeker
                            </Button>
                            <Button
                                to="/register/employer"
                                variant="outline"
                                size="sm"
                                className="justify-center border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-emerald-900 hover:border-emerald-200"
                                icon={Briefcase}
                                iconPosition="left"
                            >
                                Employer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Decorative Panel */}
            <div className="hidden lg:flex w-1/2 bg-emerald-950 relative overflow-hidden items-center justify-center p-16">
                {/* Abstract Patterns */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-900/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-900/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                <div className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: `url(${login_right})` }}></div>

                <div className="relative z-10 max-w-lg text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                        Connect with the World's Best Talent
                    </h2>
                    <p className="text-emerald-200/80 text-lg leading-relaxed mb-10">
                        Join thousands of companies and professionals using Amdox to build the future of work. Experience a hiring process redefined.
                    </p>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="flex -space-x-3">
                            {[user1, user2, user3, user4].map((userImg, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-emerald-950 bg-slate-200 flex items-center justify-center border border-white/20">
                                    <img src={userImg} alt="user" className="w-full h-full rounded-full" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-1 text-emerald-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-xs text-emerald-200/60 font-medium">Trusted by 10,000+ users</p>
                        </div>
                    </div>

                    {/* Desktop Registration Links */}
                    <div className="pt-8 border-t border-emerald-900/50">
                        <p className="text-sm text-emerald-200/80 mb-6">New to Amdox? Create an account</p>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                to="/register/seeker"
                                variant="text"
                                className="justify-center border border-emerald-800 bg-emerald-900/30 text-emerald-100 hover:bg-emerald-800/50 hover:text-white backdrop-blur-sm"
                                icon={User}
                                iconPosition="left"
                            >
                                Job Seeker
                            </Button>
                            <Button
                                to="/register/employer"
                                variant="text"
                                className="justify-center border border-emerald-800 bg-emerald-900/30 text-emerald-100 hover:bg-emerald-800/50 hover:text-white backdrop-blur-sm"
                                icon={Briefcase}
                                iconPosition="left"
                            >
                                Employer
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
