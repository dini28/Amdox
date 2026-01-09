import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJobContext } from '../context/JobContext';
import { cn } from '../utils/cn';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useJobContext();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative p-2.5 rounded-2xl transition-all duration-500 overflow-hidden group",
                "bg-gray-100 dark:bg-gray-800 hover:ring-2 hover:ring-brand-500/20"
            )}
            aria-label="Toggle Theme"
        >
            <div className="relative z-10 w-5 h-5">
                <AnimatePresence mode="wait" initial={false}>
                    {isDarkMode ? (
                        <motion.div
                            key="moon"
                            initial={{ y: 20, opacity: 0, rotate: 45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -45 }}
                            transition={{ duration: 0.3, ease: 'backOut' }}
                        >
                            <Moon className="w-5 h-5 text-blue-400 fill-blue-400" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ y: 20, opacity: 0, rotate: -45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.3, ease: 'backOut' }}
                        >
                            <Sun className="w-5 h-5 text-amber-500 fill-amber-500" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background Pulse Effect */}
            <motion.div
                className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="toggleHighlight"
            />
        </button>
    );
};

export default ThemeToggle;
