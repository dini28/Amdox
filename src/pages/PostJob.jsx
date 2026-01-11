import { useState } from 'react';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import DashboardHeader from '../components/dashboard/common/DashboardHeader';
import { Briefcase, DollarSign, MapPin, CheckCircle2, Plus, X } from 'lucide-react';

const PostJob = () => {
    const [jobData, setJobData] = useState({
        title: '',
        type: 'Full-time',
        location: 'Remote',
        salaryMin: '',
        salaryMax: '',
        experience: 'Mid-Level',
        description: '',
        requirements: [''],
        benefits: ['']
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (index, field, value) => {
        const newArray = [...jobData[field]];
        newArray[index] = value;
        setJobData(prev => ({ ...prev, [field]: newArray }));
    };

    const addArrayItem = (field) => {
        setJobData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
    };

    const removeArrayItem = (index, field) => {
        setJobData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Job Posted:', jobData);
        setIsSubmitting(false);
        // Ideally redirect or show success message here
        alert('Job posted successfully! (Mock)');
    };

    return (
        <DashboardContainer>
            <DashboardHeader
                title="Post a"
                highlight="New Position"
                description="Find your next star employee."
                badges={[{ text: 'Recruitment Protocol', highlight: true }]}
            />

            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info Section */}
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <Briefcase className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Role Details</h3>
                                <p className="text-xs text-slate-500 font-medium">Core information about the position</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Job Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={jobData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400"
                                    placeholder="e.g. Senior Frontend Engineer"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Employment Type</label>
                                <select
                                    name="type"
                                    value={jobData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-slate-600"
                                >
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                    <option>Freelance</option>
                                    <option>Internship</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Experience Level</label>
                                <select
                                    name="experience"
                                    value={jobData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-slate-600"
                                >
                                    <option>Entry Level</option>
                                    <option>Mid-Level</option>
                                    <option>Senior</option>
                                    <option>Lead</option>
                                    <option>Executive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Logistics Section */}
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <MapPin className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Logistics</h3>
                                <p className="text-xs text-slate-500 font-medium">Location and compensation</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={jobData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400"
                                    placeholder="e.g. Remote, San Francisco, CA"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Min Salary (Annual)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="number"
                                        name="salaryMin"
                                        value={jobData.salaryMin}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400"
                                        placeholder="80000"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Max Salary (Annual)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="number"
                                        name="salaryMax"
                                        value={jobData.salaryMax}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400"
                                        placeholder="120000"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <CheckCircle2 className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Job Specs</h3>
                                <p className="text-xs text-slate-500 font-medium">Detailed description and requirements</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={jobData.description}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Describe the role responsibilities and team culture..."
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">Key Requirements</label>
                                    <button
                                        type="button"
                                        onClick={() => addArrayItem('requirements')}
                                        className="text-[10px] font-bold text-green-600 hover:text-green-700 uppercase tracking-widest flex items-center gap-1"
                                    >
                                        <Plus className="w-3 h-3" /> Add Item
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {jobData.requirements.map((req, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={req}
                                                onChange={(e) => handleArrayChange(index, 'requirements', e.target.value)}
                                                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-400"
                                                placeholder="e.g. 5+ years of React experience"
                                            />
                                            {jobData.requirements.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem(index, 'requirements')}
                                                    className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`
                                px-10 py-4 bg-green-600 text-white rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30 transition-all transform hover:-translate-y-0.5
                                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                            `}
                        >
                            {isSubmitting ? 'Publishing...' : 'Publish Position'}
                        </button>
                    </div>
                </form>
            </div>
        </DashboardContainer>
    );
};

export default PostJob;
