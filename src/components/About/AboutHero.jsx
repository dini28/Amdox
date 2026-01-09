import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import global from '../../assets/About/global.jpg';
import success from '../../assets/About/success.jpg';

const AboutHero = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden px-4 py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30 opacity-70"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-2xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8"
                            >
                                Redefining the <br />
                                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                                    Future of Hiring
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                            >
                                We're building the bridge between exceptional talent and world-class organizations. At Amdox, we believe every career move should be a step toward greatness.
                            </motion.p>
                        </div>

                        {/* Hero Right Side - Visual Composition */}
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
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <p className="font-bold text-gray-900">Global Reach</p>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">Connecting talent across 85+ countries</div>
                                    </div>
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                        <img src={global} className="w-full h-full object-cover" alt="Professional" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                        <img src={success} className="w-full h-full object-cover" alt="Meeting" />
                                    </div>
                                    <div className="p-6 bg-green-600 text-white rounded-2xl shadow-xl">
                                        <div className="font-bold text-3xl mb-1">98%</div>
                                        <div className="text-green-100 text-sm">Successful match rate across all industries</div>
                                    </div>
                                </div>
                            </div>
                            {/* Background Blobs */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: 'Active Users', value: '2M+' },
                            { label: 'Companies', value: '150K+' },
                            { label: 'Countries', value: '85+' },
                            { label: 'Matches Made', value: '10M+' }
                        ].map((stat, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={stat.label}
                                className="border-l border-white/20 pl-8"
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHero;
