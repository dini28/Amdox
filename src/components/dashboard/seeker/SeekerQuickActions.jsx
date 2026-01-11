import { Upload, Edit, Bookmark, Search, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ icon: Icon, label, onClick, colorClass = "bg-slate-50 text-slate-600 hover:bg-slate-100" }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md ${colorClass}`}
    >
        <div className="p-3 bg-white rounded-xl shadow-sm">
            <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
);

const SeekerQuickActions = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-8">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ActionButton
                    icon={Upload}
                    label="Upload Resume"
                    onClick={() => { }}
                    colorClass="bg-green-50 text-green-700 hover:bg-green-100"
                />
                <ActionButton
                    icon={Edit}
                    label="Edit Profile"
                    onClick={() => navigate('/profile/seeker')}
                />
                <ActionButton
                    icon={Search}
                    label="Find Jobs"
                    onClick={() => navigate('/explorejobs')}
                />
                <ActionButton
                    icon={Bookmark}
                    label="Saved Jobs"
                    onClick={() => navigate('/saved')}
                />
            </div>
        </div>
    );
};

export default SeekerQuickActions;
