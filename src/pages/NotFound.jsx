import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-black">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center">
                {/* Animated 404 text */}
                <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-green-900 drop-shadow-2xl opacity-20 select-none animate-pulse"
                    style={{ fontFamily: "'Iceland', sans-serif" }}>
                    404
                </h1>

                <div className="mt-[-4rem] md:mt-[-6rem]">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Electrolize', sans-serif" }}>
                        Not Found
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                        We are working on it. The page you're looking for might be under construction or moved to a new dimension.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-[0_10px_20px_-10px_rgba(22,163,74,0.5)] hover:scale-105 transition-all"
                        >
                            Back to Home
                        </Link>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Futuristic Accents */}
            <div className="mt-16 flex items-center gap-2 text-gray-400">
                <img className='w-10 h-10' src={logo} alt="Logo" />
                <span className="text-xs tracking-[0.2em] font-medium uppercase">Amdox Core System Online</span>
            </div>

            {/* Grid Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#16a34a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>
        </div>
    );
};

export default NotFound;
