

const SkeletonJobCard = () => {
    return (
        <div className="bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col gap-6 animate-pulse shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl" />
            <div className="space-y-4">
                <div className="h-2 w-24 bg-slate-100 rounded-full" />
                <div className="h-8 w-full bg-slate-100 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-3 w-full bg-slate-50 rounded-full" />
                <div className="h-3 w-full bg-slate-50 rounded-full" />
                <div className="h-3 w-full bg-slate-50 rounded-full" />
                <div className="h-3 w-full bg-slate-50 rounded-full" />
            </div>
            <div className="flex gap-2">
                <div className="h-7 w-16 bg-slate-100 rounded-lg" />
                <div className="h-7 w-16 bg-slate-100 rounded-lg" />
            </div>
        </div>
    );
};

export default SkeletonJobCard;
