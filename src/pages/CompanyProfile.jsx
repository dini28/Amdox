import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Camera,
    Edit2,
    Save,
    MapPin,
    Building2,
    Link as LinkIcon,
    Globe,
    Linkedin,
    Plus,
    Trash2,
    X,
    Users,
    Target,
    Briefcase
} from 'lucide-react';

const CompanyProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "TechFlow Solutions",
        tagline: "Building the future of digital workflows",
        location: "San Francisco, CA",
        website: "techflow.example.com",
        size: "50-200 Employees",
        founded: "2018",
        about: "TechFlow is a leading provider of AI-driven workflow automation tools. We believe in empowering teams to focus on creativity while our systems handle the mundane. Our culture is built on transparency, innovation, and continuous learning.",
        culture: [
            { id: 1, title: "Remote First", icon: "🏠" },
            { id: 2, title: "Continuous Learning", icon: "📚" },
            { id: 3, title: "Health & Wellness", icon: "🧘" }
        ],
        stack: ["React", "Node.js", "Python", "AWS", "TensorFlow"],
        socials: {
            linkedin: "linkedin.com/company/techflow",
            twitter: "twitter.com/techflow"
        }
    });

    const handleSave = () => {
        setIsEditing(false);
        console.log("Saving company profile...", profile);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-20">
            {/* Banner Section */}
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-emerald-900 to-emerald-700">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg ${isEditing
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-white text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        {isEditing ? (
                            <>
                                <Save className="w-4 h-4" /> Save Changes
                            </>
                        ) : (
                            <>
                                <Edit2 className="w-4 h-4" /> Edit Page
                            </>
                        )}
                    </button>
                </div>
                {isEditing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group transition-all">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-5 h-5" /> Change Cover
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 sm:px-6 -mt-24 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Brand Sidebar */}
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 relative">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto -mt-20 mb-4">
                                <div className="w-full h-full rounded-3xl border-4 border-white shadow-md overflow-hidden bg-white relative group flex items-center justify-center">
                                    <Building2 className="w-16 h-16 text-emerald-600" />
                                    {isEditing && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <Camera className="w-6 h-6 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="text-center space-y-2 mb-6">
                                {isEditing ? (
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                            className="w-full p-2 text-center text-2xl font-bold border-b border-gray-200 focus:border-emerald-600 outline-none bg-transparent"
                                            placeholder="Company Name"
                                        />
                                        <input
                                            type="text"
                                            value={profile.tagline}
                                            onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                                            className="w-full p-2 text-center text-sm text-gray-600 border-b border-gray-200 focus:border-emerald-600 outline-none bg-transparent"
                                            placeholder="Company Tagline"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                                        <p className="text-gray-600 text-sm font-medium">{profile.tagline}</p>
                                    </>
                                )}
                            </div>

                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                                    {isEditing ? (
                                        <input
                                            value={profile.location}
                                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                                            className="flex-1 border-b border-gray-200 focus:border-emerald-600 outline-none bg-transparent py-1"
                                            placeholder="HQ Location"
                                        />
                                    ) : (
                                        <span>{profile.location}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Globe className="w-4 h-4 text-gray-400 shrink-0" />
                                    {isEditing ? (
                                        <input
                                            value={profile.website}
                                            onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                                            className="flex-1 border-b border-gray-200 focus:border-emerald-600 outline-none bg-transparent py-1"
                                            placeholder="Website URL"
                                        />
                                    ) : (
                                        <a href={`https://${profile.website}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600 hover:underline truncate">
                                            {profile.website}
                                        </a>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Users className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span>{profile.size}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Section */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Target className="w-4 h-4 text-emerald-600" />
                                Tech Stack
                            </h3>
                            {isEditing ? (
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        {profile.stack.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center gap-2">
                                                {tech}
                                                <button
                                                    onClick={() => setProfile({
                                                        ...profile,
                                                        stack: profile.stack.filter((_, i) => i !== index)
                                                    })}
                                                    className="text-gray-400 hover:text-red-500"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Add tech..."
                                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-emerald-600 outline-none"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    if (e.target.value.trim()) {
                                                        setProfile({ ...profile, stack: [...profile.stack, e.target.value.trim()] });
                                                        e.target.value = '';
                                                    }
                                                }
                                            }}
                                        />
                                        <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {profile.stack.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full md:w-2/3 space-y-6">
                        {/* About Section */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About Us</h2>
                            {isEditing ? (
                                <textarea
                                    value={profile.about}
                                    onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                                    rows={4}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-600 outline-none resize-none"
                                />
                            ) : (
                                <p className="text-gray-600 leading-relaxed">
                                    {profile.about}
                                </p>
                            )}
                        </div>

                        {/* Culture/Values Section */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Our Culture</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {profile.culture.map((item) => (
                                    <div key={item.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Active Jobs Preview */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Open Positions</h2>
                                <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                                    View All <Briefcase className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Senior Frontend Engineer</h4>
                                            <p className="text-sm text-gray-500">Remote • Full-time</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-bold text-gray-900">$120k - $160k</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
