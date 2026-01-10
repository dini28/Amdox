import React from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, ArrowRight } from 'lucide-react';

const RegisterSelection = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <Link to="/" className="inline-block mb-6">
                        <h2 className="text-3xl font-black tracking-tighter text-emerald-900">
                            AMDOX<span className="text-emerald-500">.</span>
                        </h2>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Join Our Community</h1>
                    <p className="text-slate-500 max-w-md mx-auto">Choose how you want to use Amdox. Whether you're looking for your next career move or searching for top talent.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Job Seeker Card */}
                    <Link
                        to="/register/seeker"
                        className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className='w-full flex items-center justify-between gap-2 mb-6'>
                                <div className="w-14 h-14 bg-emerald-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-200">
                                    <User className="w-7 h-7 text-emerald-600" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">I am a Job Seeker</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                Find your dream job, apply to top companies, and manage your career profile.
                            </p>

                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all">
                                <span>Continue as Job Seeker</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {/* Employer Card */}
                    <Link
                        to="/register/employer"
                        className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className='w-full flex items-center justify-between gap-2 mb-6'>
                                <div className="w-14 h-14 bg-emerald-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Briefcase className="w-7 h-7 text-emerald-600" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">I am an Employer</h3>
                            </div>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                Post jobs, search candidates, and find the perfect talent for your team.
                            </p>

                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all">
                                <span>Continue as Employer</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-slate-500">
                        Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterSelection;
