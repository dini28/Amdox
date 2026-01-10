import { useState } from 'react';
import { Camera, Edit2, Save, MapPin, Mail, Github, Linkedin, Globe, X, Plus, Trash2, Link as LinkIcon, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SeekerProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Alex Morgan",
        headline: "Senior Full Stack Engineer | React & Node.js Specialist",
        location: "San Francisco, CA",
        email: "alex.morgan@example.com",
        phone: "+1 (555) 123-4567",
        about: "Passionate developer with 7+ years of experience building scalable web applications. Expert in the MERN stack and cloud architecture. Dedicated to writing clean, maintainable code and mentoring junior developers.",
        skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "TailwindCSS", "PostgreSQL", "Docker", "Next.js", "Redis"],
        socials: {
            github: "github.com/alexmorgan",
            linkedin: "linkedin.com/in/alexmorgan",
            portfolio: "alexmorgan.dev"
        },
        experience: [
            {
                id: 1,
                role: "Senior Frontend Engineer",
                company: "TechFlow Solutions",
                duration: "2021 - Present",
                description: "Leading a team of 5 developers rearchitecting the core dashboard. improved performance by 40%."
            },
            {
                id: 2,
                role: "Software Developer",
                company: "Innovate Inc",
                duration: "2018 - 2021",
                description: "Developed and maintained full-stack internal tools used by 500+ employees."
            }
        ],
        projects: [
            {
                id: 1,
                name: "E-Commerce Analytics Platform",
                description: "Real-time dashboard for tracking sales metrics.",
                tech: ["React", "D3.js", "Firebase"]
            },
            {
                id: 2,
                name: "Task Management API",
                description: "Scalable REST API handling 1M+ req/day.",
                tech: ["Node.js", "Express", "MongoDB"]
            }
        ]
    });

    const addExperience = () => {
        setProfile({
            ...profile,
            experience: [
                { id: Date.now(), role: "Role Title", company: "Company Name", duration: "Year - Year", description: "Describe your impact..." },
                ...profile.experience
            ]
        });
    };

    const removeExperience = (id) => {
        setProfile({
            ...profile,
            experience: profile.experience.filter(exp => exp.id !== id)
        });
    };

    const addProject = () => {
        setProfile({
            ...profile,
            projects: [
                { id: Date.now(), name: "Project Name", description: "Project Description", tech: ["Tech 1", "Tech 2"] },
                ...profile.projects
            ]
        });
    };

    const removeProject = (id) => {
        setProfile({
            ...profile,
            projects: profile.projects.filter(p => p.id !== id)
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm ${isEditing
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                        }`}
                >
                    {isEditing ? (
                        <>
                            <Save className="w-4 h-4" /> Save Configuration
                        </>
                    ) : (
                        <>
                            <Edit2 className="w-4 h-4" /> Edit Profile
                        </>
                    )}
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Card Sidebar */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8 relative">
                        <div className="relative w-32 h-32 md:w-32 md:h-32 mx-auto mb-6">
                            <div className="w-full h-full rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-slate-200 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                {isEditing && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Camera className="w-6 h-6 text-white" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="text-center space-y-2 mb-8">
                            {isEditing ? (
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                        className="w-full p-2 text-center text-xl font-black text-slate-900 border-b border-slate-200 focus:border-green-600 outline-none bg-transparent uppercase tracking-tight"
                                        placeholder="YOUR NAME"
                                    />
                                    <input
                                        type="text"
                                        value={profile.headline}
                                        onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                                        className="w-full p-2 text-center text-xs font-bold text-slate-500 border-b border-slate-200 focus:border-green-600 outline-none bg-transparent"
                                        placeholder="Professional Headline"
                                    />
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{profile.name}</h1>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">{profile.headline}</p>
                                </>
                            )}
                        </div>

                        <div className="space-y-4 pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                                {isEditing ? (
                                    <input
                                        value={profile.location}
                                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                                        className="flex-1 border-b border-slate-200 focus:border-green-600 outline-none bg-transparent py-1"
                                        placeholder="Location"
                                    />
                                ) : (
                                    <span>{profile.location}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                                {isEditing ? (
                                    <input
                                        value={profile.email}
                                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                        className="flex-1 border-b border-slate-200 focus:border-green-600 outline-none bg-transparent py-1"
                                        placeholder="Email"
                                    />
                                ) : (
                                    <span>{profile.email}</span>
                                )}
                            </div>
                            {/* Social Links */}
                            <div className="flex flex-col gap-3 pt-2">
                                {[
                                    { icon: Github, key: 'github', label: 'GitHub' },
                                    { icon: Linkedin, key: 'linkedin', label: 'LinkedIn' },
                                    { icon: Globe, key: 'portfolio', label: 'Portfolio' }
                                ].map((social) => (
                                    <div key={social.key} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                                        <social.icon className="w-4 h-4 text-slate-400 shrink-0" />
                                        {isEditing ? (
                                            <input
                                                value={profile.socials[social.key]}
                                                onChange={(e) => setProfile({
                                                    ...profile,
                                                    socials: { ...profile.socials, [social.key]: e.target.value }
                                                })}
                                                className="flex-1 border-b border-slate-200 focus:border-green-600 outline-none bg-transparent py-1"
                                                placeholder={`${social.label} URL`}
                                            />
                                        ) : (
                                            <a href={`https://${profile.socials[social.key]}`} target="_blank" rel="noreferrer" className="hover:text-green-600 hover:underline truncate">
                                                {profile.socials[social.key]}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8">
                        <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tight text-sm">
                            <Briefcase className="w-4 h-4 text-green-600" />
                            Tech Stack
                        </h3>
                        {isEditing ? (
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    {profile.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wide flex items-center gap-2">
                                            {skill}
                                            <button
                                                onClick={() => setProfile({
                                                    ...profile,
                                                    skills: profile.skills.filter((_, i) => i !== index)
                                                })}
                                                className="text-slate-400 hover:text-red-500"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="ADD SKILL..."
                                        className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold focus:border-green-600 outline-none uppercase"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                if (e.target.value.trim()) {
                                                    setProfile({ ...profile, skills: [...profile.skills, e.target.value.trim()] });
                                                    e.target.value = '';
                                                }
                                            }
                                        }}
                                    />
                                    <button className="p-2 bg-slate-900 text-white rounded-xl hover:bg-green-600 transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wide">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full md:w-2/3 space-y-6">
                    {/* About Section */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8">
                        <h2 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">About Me</h2>
                        {isEditing ? (
                            <textarea
                                value={profile.about}
                                onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                                rows={4}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none resize-none font-medium text-slate-600 text-sm"
                            />
                        ) : (
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {profile.about}
                            </p>
                        )}
                    </div>

                    {/* Experience Section */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Experience</h2>
                            {isEditing && (
                                <button onClick={addExperience} className="text-[10px] font-bold text-green-600 hover:text-green-700 flex items-center gap-1 uppercase tracking-widest">
                                    <Plus className="w-4 h-4" /> Add Role
                                </button>
                            )}
                        </div>
                        <div className="space-y-10">
                            <AnimatePresence>
                                {profile.experience.map((exp) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="relative pl-8 border-l-2 border-slate-100 last:border-0"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-100 border-2 border-white"></div>
                                        {isEditing ? (
                                            <div className="bg-slate-50 p-6 rounded-2xl space-y-4 relative group border border-slate-200">
                                                <button
                                                    onClick={() => removeExperience(exp.id)}
                                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <input
                                                        value={exp.role}
                                                        onChange={(e) => {
                                                            const newExp = profile.experience.map(e_ => e_.id === exp.id ? { ...e_, role: e.target.value } : e_);
                                                            setProfile({ ...profile, experience: newExp });
                                                        }}
                                                        className="p-2 border border-slate-200 rounded-lg text-sm font-bold placeholder:text-slate-400"
                                                        placeholder="Role Title"
                                                    />
                                                    <input
                                                        value={exp.company}
                                                        onChange={(e) => {
                                                            const newExp = profile.experience.map(e_ => e_.id === exp.id ? { ...e_, company: e.target.value } : e_);
                                                            setProfile({ ...profile, experience: newExp });
                                                        }}
                                                        className="p-2 border border-slate-200 rounded-lg text-sm font-bold placeholder:text-slate-400"
                                                        placeholder="Company"
                                                    />
                                                </div>
                                                <input
                                                    value={exp.duration}
                                                    onChange={(e) => {
                                                        const newExp = profile.experience.map(e_ => e_.id === exp.id ? { ...e_, duration: e.target.value } : e_);
                                                        setProfile({ ...profile, experience: newExp });
                                                    }}
                                                    className="w-full p-2 border border-slate-200 rounded-lg text-sm font-bold placeholder:text-slate-400"
                                                    placeholder="Duration (e.g. 2020 - Present)"
                                                />
                                                <textarea
                                                    value={exp.description}
                                                    onChange={(e) => {
                                                        const newExp = profile.experience.map(e_ => e_.id === exp.id ? { ...e_, description: e.target.value } : e_);
                                                        setProfile({ ...profile, experience: newExp });
                                                    }}
                                                    className="w-full p-2 border border-slate-200 rounded-lg text-sm h-24 resize-none placeholder:text-slate-400"
                                                    placeholder="Description"
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                                                <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">{exp.company} • {exp.duration}</div>
                                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{exp.description}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Featured Projects</h2>
                            {isEditing && (
                                <button onClick={addProject} className="text-[10px] font-bold text-green-600 hover:text-green-700 flex items-center gap-1 uppercase tracking-widest">
                                    <Plus className="w-4 h-4" /> Add Project
                                </button>
                            )}
                        </div>
                        <div className="grid gap-6">
                            <AnimatePresence>
                                {profile.projects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-green-200 transition-colors relative"
                                    >
                                        {isEditing ? (
                                            <div className="space-y-4">
                                                <button
                                                    onClick={() => removeProject(project.id)}
                                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <input
                                                    value={project.name}
                                                    onChange={(e) => {
                                                        const newProjects = profile.projects.map(p => p.id === project.id ? { ...p, name: e.target.value } : p);
                                                        setProfile({ ...profile, projects: newProjects });
                                                    }}
                                                    className="w-full p-2 border border-slate-200 rounded-lg font-bold placeholder:text-slate-400"
                                                    placeholder="Project Name"
                                                />
                                                <textarea
                                                    value={project.description}
                                                    onChange={(e) => {
                                                        const newProjects = profile.projects.map(p => p.id === project.id ? { ...p, description: e.target.value } : p);
                                                        setProfile({ ...profile, projects: newProjects });
                                                    }}
                                                    className="w-full p-2 border border-slate-200 rounded-lg text-sm h-24 resize-none placeholder:text-slate-400"
                                                    placeholder="Description"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors uppercase tracking-tight">{project.name}</h3>
                                                        <p className="text-sm text-slate-500 font-medium mb-4">{project.description}</p>
                                                    </div>
                                                    <LinkIcon className="w-5 h-5 text-slate-400 group-hover:text-green-600 transition-colors" />
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((tech, i) => (
                                                        <span key={i} className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md uppercase tracking-wide">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SeekerProfile;
