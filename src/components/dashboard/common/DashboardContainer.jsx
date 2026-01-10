export const DashboardContainer = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 transition-colors duration-500 p-6 lg:p-10 pt-32">
            <div className="max-w-full space-y-10">
                {children}
            </div>
        </div>
    );
};
