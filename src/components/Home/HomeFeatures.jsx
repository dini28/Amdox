import { Zap, Globe, ShieldCheck, TrendingUp, Users, Building2, Award } from 'lucide-react';

const features = [
    {
        title: 'Fast & Easy',
        description: 'Find your next job in minutes with our user-friendly platform.',
        icon: Zap
    },
    {
        title: 'Global Network',
        description: 'Access opportunities worldwide. Connect with companies and talent across 50+ countries.',
        icon: Globe
    },
    {
        title: 'Verified & Secure',
        description: 'All companies are verified manually. Your data is protected with enterprise-grade security.',
        icon: ShieldCheck
    }
];

const stats = [
    {
        title: 'Active Jobs',
        description: '12.5K+',
        icon: TrendingUp
    },
    {
        title: 'Candidates',
        description: '100K+',
        icon: Users
    },
    {
        title: 'Companies',
        description: '5.8K+',
        icon: Building2
    },
    {
        title: 'Success Rate',
        description: '98%',
        icon: Award
    }
];

const HomeFeatures = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50/50 rounded-full blur-3xl -ml-24 -mb-24"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Why Professionals Choose <span className="text-green-600">Amdox</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We're not just a job board. We're your partner in career growth and talent acquisition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/50 transition-all duration-500">
                                <div className='flex flex-col items-center text-center gap-6'>
                                    <div className="flex items-center gap-4">
                                        <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center text-green-600">
                                            <Icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
                                <div className="absolute inset-0 bg-green-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.description}</div>
                                    <div className="text-gray-600 font-medium">{stat.title}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;