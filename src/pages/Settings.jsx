import { useState } from 'react';
import { User, Shield, Bell, CreditCard, Save, MapPin, Mail, Phone, Lock, Globe } from 'lucide-react';
import { DashboardContainer } from '../components/dashboard/common/DashboardContainer';
import DashboardHeader from '../components/dashboard/common/DashboardHeader';
import Button from '../components/Button';

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'profile', label: 'Public Profile', icon: User },
        { id: 'account', label: 'Account & Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
    ];

    return (
        <div className="w-full lg:w-64 space-y-1">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${activeTab === tab.id
                            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                >
                    <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-green-400" : "text-slate-400"}`} />
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

const ProfileSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-6 pb-8 border-b border-slate-100">
                <div className="relative group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-24 h-24 rounded-3xl object-cover ring-4 ring-white shadow-xl"
                    />
                    <div className="absolute inset-0 bg-slate-900/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                        CHANGE
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Avatar</h3>
                    <p className="text-slate-500 text-sm mb-4">Upload a high-res image.</p>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm">Remove</Button>
                        <Button variant="secondary" size="sm">Upload New</Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input type="text" defaultValue="Alex Johnson" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headline</label>
                    <input type="text" defaultValue="Senior Frontend Engineer" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bio</label>
                    <textarea rows="4" defaultValue="Passionate about building accessible and performant web applications." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" defaultValue="San Francisco, CA" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Portfolio Website</label>
                    <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" defaultValue="https://alexj.dev" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-slate-100">
                <Button variant="primary" icon={Save}>Save Changes</Button>
            </div>
        </div>
    );
};

const AccountSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4 pb-8 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Contact Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="email" defaultValue="alex@example.com" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Security</h3>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Confirm New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-slate-100">
                <Button variant="primary" icon={Save}>Update Security</Button>
            </div>
        </div>
    );
};

const NotificationSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {[
                { title: "Email Notifications", items: ["New Job Matches", "Application Status Updates", "Marketing Emails"] },
                { title: "Push Notifications", items: ["Direct Messages", "Interview Reminders", "Profile Views"] }
            ].map((section, idx) => (
                <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                        {section.items.map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                                <span className="font-medium text-slate-700">{item}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex justify-end pt-6 border-t border-slate-100">
                <Button variant="primary" icon={Save}>Save Preferences</Button>
            </div>
        </div>
    );
};

const BillingSettings = () => (
    <div className="text-center py-20 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Billing Portal</h3>
        <p className="text-slate-500 mt-2 mb-6 max-w-sm mx-auto">Manage your subscription, view invoices, and update payment methods securely.</p>
        <Button variant="outline" className="mx-auto">Open Billing Dashboard</Button>
    </div>
);

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <DashboardContainer>
            <DashboardHeader
                title="Account"
                highlight="Settings"
                description="Manage your preferences and account security."
            />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Main Content Area */}
                <div className="flex-1 bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm min-h-[600px]">
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'account' && <AccountSettings />}
                    {activeTab === 'notifications' && <NotificationSettings />}
                    {activeTab === 'billing' && <BillingSettings />}
                </div>
            </div>
        </DashboardContainer>
    );
};

export default Settings;
