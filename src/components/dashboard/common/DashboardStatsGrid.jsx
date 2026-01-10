import DashboardStat from '../DashboardStat';

const DashboardStatsGrid = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <DashboardStat
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    subtext={stat.subtext}
                    icon={stat.icon}
                    delay={0.1 * (index + 1)}
                />
            ))}
        </div>
    );
};

export default DashboardStatsGrid;
