import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, User, Mail, Lock, Globe, MapPin, BadgeCheck, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const RegisterJobLister = () => {
    const navigate = useNavigate();
    const { registerEmployer } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Recruiter Info
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        position: '',

        // Company Details
        companyName: '',
        website: '',
        industry: '',
        companySize: '',
        headquarters: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await registerEmployer(formData);
            navigate('/dashboard/employer');
        } catch (error) {
            console.error("Registration failed", error);
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
                        <h1 className="text-3xl font-bold text-slate-900 mb-3">Employer Registration</h1>
                        <p className="text-slate-500">Find top global talent for your company.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Section 1: Recruiter Information */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                                Recruiter Information
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
                                            placeholder="Sarah"
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
                                            placeholder="Connor"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Work Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="sarah@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Job Title</label>
                                    <div className="relative">
                                        <BadgeCheck className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="HR Manager"
                                        />
                                    </div>
                                </div>
                            </div>

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
                        </div>

                        {/* Section 2: Company Details */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                                Company Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Company Name</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Website</label>
                                    <div className="relative">
                                        <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <input
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            type="url"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            placeholder="https://acme.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Industry</label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="tech">Technology</option>
                                        <option value="finance">Finance</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="education">Education</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-700 ml-1">Company Size</label>
                                    <div className="relative">
                                        <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                        <select
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none"
                                        >
                                            <option value="">Select Size</option>
                                            <option value="1-10">1-10 Employees</option>
                                            <option value="11-50">11-50 Employees</option>
                                            <option value="51-200">51-200 Employees</option>
                                            <option value="200+">200+ Employees</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Headquarters</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                    <input
                                        name="headquarters"
                                        value={formData.headquarters}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                        placeholder="San Francisco, CA"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 ml-1">Company Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                                    placeholder="Briefly describe what your company does..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                loading={isLoading}
                                fullWidth
                                size="xl"
                                variant="primary"
                            >
                                {isLoading ? 'Creating Employer Account...' : 'Create Employer Account'}
                            </Button>
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

export default RegisterJobLister;
