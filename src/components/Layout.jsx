import Header from './Header';
import HomeHeader from './HomeHeader';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const Layout = ({ children }) => {
    const location = useLocation();
    const isLandingPage = ['/', '/about'].includes(location.pathname);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
            {isLandingPage ? <HomeHeader /> : <Header />}

            <AnimatePresence mode="wait">
                {!isLandingPage && (
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            <main className={cn(
                "transition-all duration-500 min-h-screen flex flex-col",
                !isLandingPage && "lg:ml-64"
            )}>
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default Layout;
