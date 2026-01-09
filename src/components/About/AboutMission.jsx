import { Building2, Users, Globe, Award } from 'lucide-react';
import us from '../../assets/About/us.jpg';

const AboutMission = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 text-green-600 font-bold uppercase tracking-wider text-sm">
                            <div className="w-10 h-[2px] bg-green-600"></div>
                            Our Mission
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Empowering Careers Through Technology
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The traditional hiring process is broken. Resume black holes, ghosting, and mismatched expectations have become the norm. We're here to change that.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            By leveraging advanced AI matching algorithms and prioritizing transparency, we've created an ecosystem where talent meets opportunity seamlessly.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Users, title: 'Human Centric', desc: 'People first, always.' },
                                { icon: Globe, title: 'Global Reach', desc: 'Opportunities everywhere.' },
                                { icon: Award, title: 'Excellence', desc: 'Quality matching.' },
                                { icon: Building2, title: 'Innovation', desc: 'Future-ready tech.' }
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                            {/* Placeholder for office/team image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent z-10"></div>
                            <img
                                src={us}
                                alt="Team collaborating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
