import { ArrowRight } from 'lucide-react';

const UserPaths = () => {
    const handleNavigate = (path) => {
        window.location.href = path;
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Job Seeker */}
                <div
                    onClick={() => handleNavigate('/dashboard')}
                    className="relative group cursor-pointer min-h-[600px] lg:min-h-[85vh] bg-gradient-to-br from-green-600 to-green-700 flex flex-col items-center justify-center p-8 md:p-16 text-white overflow-hidden transition-all duration-500 hover:flex-[1.1]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] transition-transform duration-700 group-hover:scale-125"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>

                    <div className="relative z-10 max-w-xl w-full space-y-8 transform transition-transform duration-500">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                                Find Your <span className="text-green-200">Dream Job</span>
                            </h2>
                            <p className="text-xl text-green-50 leading-relaxed max-w-md">
                                Access thousands of opportunities from top companies. Start your career journey today.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">12.5K+ Jobs</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">5.8K+ Companies</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">Global Reach</span>
                            </div>
                        </div>

                        <button
                            className="group/btn mt-8 px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-900/20"
                        >
                            Explore Jobs
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Side - Employer */}
                <div
                    onClick={() => handleNavigate('/employer')}
                    className="relative group cursor-pointer min-h-[600px] lg:min-h-[85vh] bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-8 md:p-16 text-white overflow-hidden transition-all duration-500 hover:flex-[1.1]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.1),transparent)] transition-transform duration-700 group-hover:scale-125"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>

                    <div className="relative z-10 max-w-xl w-full space-y-8 transform transition-transform duration-500">

                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                                Hire Top <span className="text-green-400">Talent</span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
                                Connect with qualified candidates and build your dream team. Streamline your hiring process.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">100K+ Candidates</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">AI Matching</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">Fast Hiring</span>
                            </div>
                        </div>

                        <button
                            className="group/btn mt-8 px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-500 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-600/20"
                        >
                            Post a Job
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPaths;