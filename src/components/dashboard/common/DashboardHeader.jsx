const DashboardHeader = ({ title, highlight, badges, description, actions, children }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-200 pb-10 pt-16">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    {badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${badge.highlight
                                ? "text-green-600 bg-green-50"
                                : "text-slate-400"
                                }`}
                        >
                            {badge.text}
                        </span>
                    ))}
                </div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {title} <span className="text-green-600">{highlight}</span>
                </h1>
                <p className="text-slate-500 mt-4 font-medium italic">{description}</p>
            </div>

            <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                {actions || children}
            </div>
        </div>
    );
};

export default DashboardHeader;
