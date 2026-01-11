import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import DashboardHeader from '../components/dashboard/common/DashboardHeader';
import JobCard from '../components/JobCard';
import { jobs, candidates, userProfile } from '../data/mockData';
import { MapPin, CheckCircle2, Download, MessageSquare, UserPlus } from 'lucide-react';

const SavedCandidatesGrid = ({ savedCandidates }) => {
    // Reusing the card design from Candidates.jsx
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCandidates.map((candidate) => (
                <div
                    key={candidate.id}
                    className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all group relative overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[32px] -mr-4 -mt-4 transition-colors group-hover:bg-green-50"></div>

                    <div className="relative mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img
                                    src={candidate.avatar}
                                    alt={candidate.name}
                                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
                                />
                                <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg group-hover:text-green-600 transition-colors">{candidate.name}</h3>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                    <MapPin className="w-3 h-3" /> {candidate.location}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div>
                            <p className="text-xs font-bold text-slate-900 mb-1">{candidate.headline}</p>
                            <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">{candidate.status}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {candidate.skills.slice(0, 3).map(skill => (
                                <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wide border border-slate-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-6 border-t border-slate-100">
                        <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-green-600 transition-colors">
                            <Download className="w-4 h-4" />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Resume</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-green-600 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Chat</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl hover:bg-green-50 text-slate-400 hover:text-green-600 transition-colors">
                            <UserPlus className="w-4 h-4" />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Hire</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SavedItems = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // Determine initial view mode based on user role
    // Default to 'seeker' if no user (e.g. not logged in) or if user is seeker
    // If user is employer, default to 'employer'
    const [viewMode, setViewMode] = useState(user?.role === 'employer' ? 'employer' : 'seeker');

    // Effect to update viewMode if user changes (e.g. login/logout)
    useEffect(() => {
        if (user?.role) {
            setViewMode(user.role === 'employer' ? 'employer' : 'seeker');
        }
    }, [user]);

    // MOCK DATA FETCHING
    const savedJobIds = userProfile.savedJobs || [];
    const savedJobsList = jobs.filter(job => savedJobIds.includes(job.id));

    // Mock saved candidates (taking first 2 for demo)
    const savedCandidatesList = candidates.slice(0, 2);

    return (
        <DashboardContainer>
            <DashboardHeader
                title="Saved"
                highlight={viewMode === 'seeker' ? "Opportunities" : "Talent"}
                description={viewMode === 'seeker' ? "Review and apply to your bookmarked positions." : "Shortlisted candidates for your open roles."}
            >
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setViewMode('seeker')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'seeker' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Saved Jobs
                    </button>
                    <button
                        onClick={() => setViewMode('employer')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'employer' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Saved Candidates
                    </button>
                </div>
            </DashboardHeader>

            <div className="py-8">
                {viewMode === 'seeker' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedJobsList.length > 0 ? (
                            savedJobsList.map(job => (
                                <JobCard key={job.id} job={job} viewMode="grid" />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-slate-50 rounded-[32px] border border-slate-100 border-dashed">
                                <p className="text-slate-400 font-medium">No saved jobs yet.</p>
                                <button onClick={() => navigate('/explorejobs')} className="mt-4 text-green-600 font-bold hover:underline">Explore Jobs</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <SavedCandidatesGrid savedCandidates={savedCandidatesList} />
                )}
            </div>
        </DashboardContainer>
    );
};

export default SavedItems;
