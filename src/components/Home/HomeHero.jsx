import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import job from '../../assets/Home/job.jpg';
import company from '../../assets/Home/company.jpg';
import Button from '../Button';

const HomeHero = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/dashboard/seeker');
    };

    const handleEmployerClick = () => {
        navigate('/dashboard/employer');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden px-4 py-24">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Discover Your Next
                                <br />
                                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                                    Career Opportunity
                                </span>
                            </h1>
                        </div>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Connect with leading companies across industries and find roles that align with your expertise and career goals. Join thousands of professionals who've found their perfect match.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                            <Button
                                onClick={handleExploreClick}
                                size="xl"
                                icon={ArrowRight}
                            >
                                Browse Opportunities
                            </Button>

                            <Button
                                onClick={handleEmployerClick}
                                variant="outline"
                                size="xl"
                                icon={ArrowRight}
                            >
                                Post a Job
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <div className="font-bold text-3xl text-gray-900 mb-1">12.5K+</div>
                                    </div>
                                    <div className="font-medium text-gray-900">Active Job Listings</div>
                                    <div className="text-sm text-gray-500">Across all industries</div>
                                </div>
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                    <img src={job} className="w-full h-full object-cover" alt="Professional" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                    <img src={company} className="w-full h-full object-cover" alt="Business Meeting" />
                                </div>
                                <div className="p-6 bg-green-600 text-white rounded-2xl shadow-xl">
                                    <div className="font-bold text-3xl mb-1">5.8K+</div>
                                    <div className="font-medium text-white text-lg">Hiring Companies</div>
                                    <div className="text-green-100 text-sm mt-1">Top employers waiting</div>
                                </div>
                            </div>
                        </div>
                        {/* Background Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;