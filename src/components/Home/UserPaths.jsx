import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';

const UserPaths = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Job Seeker */}
                <div
                    onClick={() => navigate('/dashboard/seeker')}
                    className="relative min-h-[600px] lg:min-h-[85vh] bg-gradient-to-br from-green-600 to-green-700 flex flex-col items-center justify-center p-8 md:p-16 text-white overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    <div className="absolute inset-0 bg-black/0"></div>

                    <div className="relative z-10 max-w-xl w-full space-y-8">
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

                        <Button
                            variant="text"
                            className="text-lg px-8 py-4 bg-white text-green-700 hover:bg-green-50 rounded-2xl shadow-2xl shadow-green-900/20 h-auto"
                            icon={ArrowRight}
                        >
                            Explore Jobs
                        </Button>
                    </div>
                </div>

                {/* Right Side - Employer */}
                <div
                    onClick={() => navigate('/dashboard/employer')}
                    className="relative min-h-[600px] lg:min-h-[85vh] bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-8 md:p-16 text-white overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.1),transparent)]"></div>
                    <div className="absolute inset-0 bg-black/0"></div>

                    <div className="relative z-10 max-w-xl w-full space-y-8">

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

                        <Button
                            variant="primary"
                            className="text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-green-600/20 h-auto"
                            icon={ArrowRight}
                        >
                            Post a Job
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPaths;