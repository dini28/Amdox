import { motion } from 'framer-motion';

const DashboardStat = ({ label, value, subtext, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="flex items-center gap-5 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
    >
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{label}</p>
            <p className="text-2xl font-black text-slate-900">{value}</p>
            {subtext && <p className="text-[10px] font-bold text-green-600 tracking-wide mt-1">{subtext}</p>}
        </div>
    </motion.div>
);

export default DashboardStat;
