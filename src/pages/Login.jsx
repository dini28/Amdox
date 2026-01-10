import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Briefcase, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
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
                navigate('/employer');
            } else {
                navigate('/dashboard');
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
                        <button
                            onClick={() => setRole('seeker')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${role === 'seeker'
                                ? 'bg-white text-emerald-950 shadow-md shadow-slate-200/50 ring-1 ring-black/5'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                                }`}
                        >
                            <User className={`w-4 h-4 ${role === 'seeker' ? 'text-emerald-500' : 'text-slate-400'}`} />
                            Job Seeker
                        </button>
                        <button
                            onClick={() => setRole('employer')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${role === 'employer'
                                ? 'bg-white text-emerald-950 shadow-md shadow-slate-200/50 ring-1 ring-black/5'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                                }`}
                        >
                            <Briefcase className={`w-4 h-4 ${role === 'employer' ? 'text-emerald-500' : 'text-slate-400'}`} />
                            Employer
                        </button>
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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center gap-2 group mt-2"
                        >
                            <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
                            {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="pt-6 border-t border-slate-100 text-center lg:text-left lg:hidden">
                        <p className="text-sm text-slate-500 mb-6">Don't have an account?</p>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                to="/register/seeker"
                                className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 hover:text-emerald-900 hover:border-emerald-200 transition-all flex items-center justify-center gap-2 group"
                            >
                                <User className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                Job Seeker
                            </Link>
                            <Link
                                to="/register/employer"
                                className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 hover:text-emerald-900 hover:border-emerald-200 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                Employer
                            </Link>
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
                            <Link
                                to="/register/seeker"
                                className="py-3 px-4 rounded-xl border border-emerald-800 bg-emerald-900/30 text-emerald-100 font-bold text-xs hover:bg-emerald-800/50 hover:text-white transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
                            >
                                <User className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                                Job Seeker
                            </Link>
                            <Link
                                to="/register/employer"
                                className="py-3 px-4 rounded-xl border border-emerald-800 bg-emerald-900/30 text-emerald-100 font-bold text-xs hover:bg-emerald-800/50 hover:text-white transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
                            >
                                <Briefcase className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                                Employer
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
