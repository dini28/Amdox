import { Github, Linkedin, Send, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_b from '../assets/logo_b.svg'

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img
                                className="w-12 h-12"
                                src={logo_b}
                                alt="logo"
                            />
                            <div>
                                <h2
                                    className="text-4xl font-bold text-gray-900 text-center"
                                    style={{ fontFamily: 'Iceland' }}
                                >
                                    Amdox
                                </h2>
                                <p className="text-xs text-gray-500">Executive Talent Hub</p>
                            </div>
                        </Link>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Connecting top talent with leading companies. Building careers, transforming businesses.
                        </p>

                        {/* Contact */}
                        <div className="space-y-3">
                            <a href="mailto:hello@amdox.io" className="flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 transition-colors">
                                <Mail className="w-4 h-4" />
                                hello@amdox.io
                            </a>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <MapPin className="w-4 h-4" />
                                Bangalore, India
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                            <ul className="space-y-3">
                                <li><Link to="/search" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Search</Link></li>
                                <li><Link to="/analytics" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Analytics</Link></li>
                                <li><Link to="/signals" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Signals</Link></li>
                                <li><Link to="/matching" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Matching</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><Link to="/about" className="text-sm text-gray-600 hover:text-green-600 transition-colors">About</Link></li>
                                <li><Link to="/careers" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Careers</Link></li>
                                <li><Link to="/partners" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Partners</Link></li>
                                <li><Link to="/press" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Press</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><Link to="/blog" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Blog</Link></li>
                                <li><Link to="/help" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Help Center</Link></li>
                                <li><Link to="/guides" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Guides</Link></li>
                                <li><Link to="/status" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Status</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Terms</Link></li>
                                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Privacy</Link></li>
                                <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Cookies</Link></li>
                                <li><Link to="/licenses" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Licenses</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                            <p className="text-gray-400 text-sm">Get weekly insights on recruitment trends and career growth.</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto md:min-w-[400px]">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all flex items-center gap-2 shadow-lg shadow-green-500/20">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Amdox. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;