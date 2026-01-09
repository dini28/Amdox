import React from 'react';
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    CheckCircle2,
    ChevronRight,
    Sparkles,
    Search,
    X,
    ChevronDown,
    Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const FilterSection = ({ title, options, icon: Icon, selected, onChange }) => (
    <div className="space-y-6 pb-8 border-b border-slate-100 last:border-0">
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-green-600 transition-colors" />
                <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{title}</h4>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
        </div>
        <div className="grid grid-cols-1 gap-1">
            {options.map((opt) => (
                <label key={opt} className="flex items-center justify-between py-2.5 cursor-pointer group transition-all">
                    <span className={cn(
                        "text-[11px] font-bold uppercase tracking-widest transition-colors",
                        selected.includes(opt) ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                    )}>
                        {opt}
                    </span>
                    <div className="relative flex items-center justify-center">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={selected.includes(opt)}
                            onChange={() => onChange(opt)}
                        />
                        <div className="w-5 h-5 border border-slate-200 bg-white rounded-lg transition-all peer-checked:bg-green-600 peer-checked:border-green-600 shadow-sm" />
                        <CheckCircle2 className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none" />
                    </div>
                </label>
            ))}
        </div>
    </div>
);

const FilterSidebar = ({ mobile, onClose, filters, setFilters }) => {
    // Handling undefined filters to prevent crash during init
    const safeFilters = filters || { type: [], level: [], salaryRange: [0, 200] };

    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    return (
        <div className={cn(
            "w-80 space-y-12 transition-all",
            mobile ? "p-10" : "hidden lg:block sticky top-40"
        )}>

            {/* Premium Title */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Parameters</span>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 leading-none">Filters</h3>
                    <button
                        onClick={() => setFilters({ type: [], level: [], salaryRange: [0, 200] })}
                        className="text-[10px] font-bold text-slate-400 hover:text-green-600 uppercase tracking-widest transition-colors"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Search within filters */}
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-green-600 transition-colors" />
                <input
                    type="text"
                    placeholder="Search filters..."
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[11px] font-bold placeholder:text-slate-300 outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all uppercase tracking-widest text-slate-900"
                />
            </div>

            <div className="space-y-10">
                <FilterSection
                    title="Employment"
                    icon={Briefcase}
                    options={['Full-time', 'Contract', 'Remote', 'Freelance']}
                    selected={safeFilters.type}
                    onChange={(val) => toggleFilter('type', val)}
                />

                {/* Salary Range - Interactive */}
                <div className="space-y-8 pb-8 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <DollarSign className="w-4 h-4 text-slate-400" />
                        <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Capital</h4>
                    </div>
                    <div className="space-y-6">
                        <div className="relative pt-6 pb-2">
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={safeFilters.salaryRange[0]}
                                onChange={(e) => setFilters(prev => ({ ...prev, salaryRange: [parseInt(e.target.value), prev.salaryRange[1]] }))}
                                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                            <span>${safeFilters.salaryRange[0]}k</span>
                            <span className="text-green-600 font-black">${safeFilters.salaryRange[1]}k+</span>
                        </div>
                    </div>
                </div>
            </div>

            {!mobile && (
                <div className="p-8 bg-green-50/50 border border-green-100 rounded-[32px] relative overflow-hidden group hover:bg-green-50 transition-all duration-500 shadow-sm shadow-green-600/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-4">Intel</p>
                    <p className="text-sm font-bold text-green-800 leading-snug tracking-tight">
                        "Eighty percent of high-potential roles require GitHub verification."
                    </p>
                    <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-green-600 rounded-full opacity-5 group-hover:scale-150 transition-all duration-700" />
                </div>
            )}

            {mobile && (
                <div className="pt-12 grid grid-cols-2 gap-4">
                    <button className="py-5 bg-white border border-slate-200 rounded-2xl font-bold text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all shadow-sm" onClick={() => {
                        setFilters({ type: [], level: [], salaryRange: [0, 200] });
                        onClose();
                    }}>
                        Reset
                    </button>
                    <button className="py-5 bg-green-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-600/20" onClick={onClose}>
                        View Results
                    </button>
                </div>
            )}
        </div>
    );
};

export default FilterSidebar;
