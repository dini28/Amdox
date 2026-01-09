import { Building2, Globe, ArrowRight } from 'lucide-react';

const AboutContact = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                            <p className="text-lg text-gray-600">Have questions about our platform or want to explore enterprise solutions? We're here to help.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Corporate Headquarters</h3>
                                    <p className="text-gray-600">Bangalore, Karnataka<br />India</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Support Center</h3>
                                    <p className="text-gray-600">support@amdox.com<br />+91 9876543210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-0 transition-all outline-none" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-0 transition-all outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-0 transition-all outline-none" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-0 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-gray-900 hover:bg-green-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                                Send Message
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;
