import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MapPin, Download, MessageSquare, UserPlus, CheckCircle2, X, Mail, Calendar, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import DashboardHeader from '../components/dashboard/common/DashboardHeader';
import { candidates } from '../data/mockData';
import Button from '../components/Button';

const CandidateSlideOver = ({ candidate, isOpen, onClose }) => {
    if (!candidate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50"
                    />

                    {/* Slide Over Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
                    >
                        <div className="relative">
                            {/* Header / Cover */}
                            <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Profile Info */}
                            <div className="px-8 -mt-16 pb-8">
                                <div className="flex items-end justify-between mb-6">
                                    <div className="relative">
                                        <img
                                            src={candidate.avatar}
                                            alt={candidate.name}
                                            className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg object-cover"
                                        />
                                        <div className="absolute bottom-2 right-2 p-1.5 bg-green-500 rounded-full border-2 border-white">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 mb-2">
                                        <Button variant="outline" size="sm" icon={Mail} onClick={() => window.location.href = `mailto:${candidate.email}`}>
                                            Email
                                        </Button>
                                        <Button variant="primary" size="sm" icon={Calendar}>
                                            Interview
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-1">{candidate.name}</h2>
                                    <p className="text-lg text-slate-500 font-medium mb-4">{candidate.headline}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-slate-400" />
                                            {candidate.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase className="w-4 h-4 text-slate-400" />
                                            {candidate.experience} Exp
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 text-green-700 rounded-full font-bold text-xs uppercase tracking-wide">
                                            {candidate.status}
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs / Sections */}
                                <div className="space-y-8">
                                    <section>
                                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">About</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {candidate.bio || "No bio available."}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {candidate.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <section>
                                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Experience</h3>
                                            <div className="space-y-4">
                                                {candidate.workHistory && candidate.workHistory.map((work, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit">
                                                            <Briefcase className="w-4 h-4 text-slate-400" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900">{work.role}</h4>
                                                            <p className="text-sm text-slate-500">{work.company}</p>
                                                            <p className="text-xs text-slate-400 mt-1">{work.duration}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {!candidate.workHistory && <p className="text-slate-400 text-sm italic">No experience listed.</p>}
                                            </div>
                                        </section>

                                        <section>
                                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Education</h3>
                                            <div className="flex gap-4">
                                                <div className="mt-1 p-2 bg-slate-50 rounded-lg h-fit">
                                                    <GraduationCap className="w-4 h-4 text-slate-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">{candidate.education || "Not specified"}</h4>
                                                    <p className="text-sm text-slate-500">Degree / Certification</p>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <section className="pt-8 border-t border-slate-100">
                                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                                    <Download className="w-5 h-5 text-slate-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">Resume.pdf</h4>
                                                    <p className="text-xs text-slate-500">Uploaded 2 days ago</p>
                                                </div>
                                            </div>
                                            <Button variant="text" size="sm" className="text-green-600 hover:bg-green-50">
                                                Download
                                            </Button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Candidates = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const filteredCandidates = candidates.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <DashboardContainer>
            <DashboardHeader
                title="Talent Discovery"
                highlight="Pool"
                description="Identify and recruit top-tier operatives."
            />

            <div className="space-y-6">
                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="SEARCH BY SKILL, ROLE, OR NAME..."
                            className="w-full pl-16 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-600 transition-all uppercase tracking-wide"
                        />
                    </div>
                    <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-green-600 hover:border-green-200 transition-all flex items-center justify-center gap-2 shadow-sm">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                </div>

                {/* Candidate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCandidates.map((candidate) => (
                        <div
                            key={candidate.id}
                            onClick={() => setSelectedCandidate(candidate)}
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
            </div>

            <CandidateSlideOver
                candidate={selectedCandidate}
                isOpen={!!selectedCandidate}
                onClose={() => setSelectedCandidate(null)}
            />
        </DashboardContainer>
    );
};

export default Candidates;
