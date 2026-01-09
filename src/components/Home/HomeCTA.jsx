import { useNavigate } from 'react-router-dom';

const HomeCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-green-600 to-emerald-700 px-6 py-24 text-center shadow-2xl shadow-green-600/30">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 blur-3xl rounded-full"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl md:leading-tight font-bold mb-6 text-white tracking-tight">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join thousands of professionals who have found their dream roles and companies that have built world-class teams with Amdox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="px-10 py-5 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2"
                            >
                                Find Jobs Now
                            </button>
                            <button
                                onClick={() => navigate('/employer')}
                                className="px-10 py-5 bg-green-800/50 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-green-800/70 hover:scale-105 transition-all flex items-center gap-2"
                            >
                                I'm Hiring
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCTA;
