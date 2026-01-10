import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Briefcase, User, MapPin, Mail, Lock, Phone, Linkedin, Globe, GraduationCap, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const RegisterJobSeeker = () => {
    const navigate = useNavigate();
    const { registerSeeker } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Account
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',

        // Professional
        headline: '', // e.g., "Senior React Developer"
        bio: '',
        portfolioUrl: '',
        linkedinUrl: '',

        // Experience & Preferences
        experienceYears: '',
        educationLevel: '',
        desiredSalary: '',
        location: '',
        remotePreference: 'remote' // remote, hybrid, onsite
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await registerSeeker(formData);
            navigate('/dashboard');
        } catch (error) {
            console.error("Registration failed", error);
            // Handle error state here
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <div className="p-8 md:p-12 lg:p-16">

                    <div className="text-center mb-10">
                        <Link to="/" className="inline-block mb-6">
                            <h2 className="text-2xl font-black tracking-tighter text-emerald-900">
                                AMDOX<span className="text-emerald-500">.</span>
                            </h2>
                        </Link>
                        <h1 className="text-3xl font-bold text-slate-900 mb-3">Job Seeker Registration</h1>
                        <p className="text-slate-500">Create your professional profile to find your dream job.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Section 1: Account Information */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                                Account Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">First Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Last Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            type="password"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Professional Profile */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                                Professional Profile
                            </h3>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Professional Headline</label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                    <input
                                        name="headline"
                                        value={formData.headline}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                        placeholder="e.g. Senior Full Stack Developer"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Bio / Summary</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                                    placeholder="Tell us a bit about your professional background and goals..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Portfolio URL</label>
                                    <div className="relative">
                                        <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="portfolioUrl"
                                            value={formData.portfolioUrl}
                                            onChange={handleChange}
                                            type="url"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="https://yourwebsite.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">LinkedIn URL</label>
                                    <div className="relative">
                                        <Linkedin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="linkedinUrl"
                                            value={formData.linkedinUrl}
                                            onChange={handleChange}
                                            type="url"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="https://linkedin.com/in/..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Experience & Preferences */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                                Experience & Preferences
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Years of Experience</label>
                                    <div className="relative">
                                        <Award className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <select
                                            name="experienceYears"
                                            value={formData.experienceYears}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none"
                                        >
                                            <option value="">Select Experience</option>
                                            <option value="entry">Entry Level</option>
                                            <option value="1-3">1-3 Years</option>
                                            <option value="3-5">3-5 Years</option>
                                            <option value="5-8">5-8 Years</option>
                                            <option value="8+">8+ Years</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Highest Education</label>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <select
                                            name="educationLevel"
                                            value={formData.educationLevel}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none"
                                        >
                                            <option value="">Select Education</option>
                                            <option value="highschool">High School</option>
                                            <option value="bachelors">Bachelor's Degree</option>
                                            <option value="masters">Master's Degree</option>
                                            <option value="phd">PhD</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Preferred Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="e.g. New York, London"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Work Preference</label>
                                    <div className="flex gap-2">
                                        {['remote', 'hybrid', 'onsite'].map(type => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setFormData(p => ({ ...p, remotePreference: type }))}
                                                className={`flex-1 py-3 px-2 rounded-xl text-sm font-bold border transition-all ${formData.remotePreference === type
                                                        ? 'bg-emerald-600 text-white border-emerald-600'
                                                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                                                    }`}
                                            >
                                                {type.charAt(0).toUpperCase() + type.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                            <p className="text-center mt-6 text-sm text-slate-500">
                                Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:underline">Sign In</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterJobSeeker;
