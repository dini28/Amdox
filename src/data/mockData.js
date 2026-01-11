export const jobs = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "TechFlow Solutions",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $160k",
        experience: "5+ years",
        category: "Software Development",
        postedAt: "2 days ago",
        description: "Work with React and Tailwind CSS to build modern user interfaces.",
        logo: "TF",
        color: "bg-blue-600",
        skills: ["React", "TypeScript", "Tailwind"],
        urgent: true,
        verified: true,
        applicants: 45
    },
    {
        id: 2,
        title: "Product Designer",
        company: "Creative Studio",
        location: "New York, NY",
        type: "Full-time",
        salary: "$90k - $130k",
        experience: "3+ years",
        category: "Design",
        postedAt: "1 day ago",
        description: "Leading the design of our visual identity and user experience.",
        logo: "CS",
        color: "bg-purple-600",
        skills: ["Figma", "UI/UX", "Prototyping"],
        urgent: false,
        verified: true,
        applicants: 128
    },
    {
        id: 3,
        title: "Marketing Manager",
        company: "Growthly",
        location: "San Francisco, CA",
        type: "Contract",
        salary: "$80k - $100k",
        experience: "4+ years",
        category: "Marketing",
        postedAt: "5 hours ago",
        description: "Develop and execute growth strategies for our SaaS product.",
        logo: "GL",
        color: "bg-green-600",
        skills: ["SEO", "Content Strategy", "Analytics"],
        urgent: true,
        verified: false,
        applicants: 12
    },
    {
        id: 4,
        title: "Security Analyst",
        company: "SafeNet Inc.",
        location: "Remote",
        type: "Full-time",
        salary: "$110k - $150k",
        experience: "2+ years",
        category: "Cybersecurity",
        postedAt: "3 days ago",
        description: "Monitor and defend our infrastructure against potential threats.",
        logo: "SN",
        color: "bg-red-600",
        skills: ["Network Security", "Python", "SIEM"],
        urgent: false,
        verified: true,
        applicants: 8
    },
    {
        id: 5,
        title: "Data Scientist",
        company: "Insight Analytics",
        location: "Chicago, IL",
        type: "Internship",
        salary: "$40 - $60 / hr",
        experience: "Entry Level",
        category: "Data Science",
        postedAt: "1 week ago",
        description: "Applied machine learning and statistical modeling to real-world data.",
        logo: "IA",
        color: "bg-orange-600",
        skills: ["Python", "TensorFlow", "SQL"],
        urgent: false,
        verified: true,
        applicants: 200
    }
];

export const candidates = [
    {
        id: 101,
        name: "Jordan Lee",
        headline: "Frontend Wizard | React & Vue Specialist",
        experience: "4 Years",
        location: "Austin, TX",
        status: "Open to Work",
        skills: ["React", "Vue.js", "Recoil", "D3.js"],
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "jordan.lee@example.com",
        phone: "+1 (512) 555-0123",
        bio: "Passionate frontend developer with a knack for creating immersive user experiences. specialized in modern JavaScript frameworks and performance optimization.",
        education: "BS Computer Science, UT Austin",
        workHistory: [
            { role: "Frontend Developer", company: "TechStart", duration: "2020 - Present" },
            { role: "Jr. Web Dev", company: "Creative Agency", duration: "2018 - 2020" }
        ]
    },
    {
        id: 102,
        name: "Sarah Chen",
        headline: "Product Designer @ TopStart",
        experience: "6 Years",
        location: "Remote",
        status: "Passive",
        skills: ["Figma", "Design Systems", "User Research"],
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "sarah.chen@example.com",
        phone: "+1 (415) 555-0456",
        bio: "Product designer focused on building accessible and scalable design systems. I bridge the gap between design and engineering.",
        education: "MFA Interaction Design, CCA",
        workHistory: [
            { role: "Sr. Product Designer", company: "TopStart", duration: "2021 - Present" },
            { role: "UX Designer", company: "Big Corp", duration: "2017 - 2021" }
        ]
    },
    {
        id: 103,
        name: "Mike Ross",
        headline: "Junior Backend Dev",
        experience: "1 Year",
        location: "New York, NY",
        status: "Open to Work",
        skills: ["Node.js", "Express", "MongoDB"],
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "mike.ross@example.com",
        phone: "+1 (212) 555-0789",
        bio: "Aspiring backend developer with a strong foundation in database design and API development. Quick learner and team player.",
        education: "Bootcamp Grad, General Assembly",
        workHistory: [
            { role: "Backend Intern", company: "StartupInc", duration: "2023 - Present" }
        ]
    }
];

export const activityFeed = [
    { id: 1, type: 'view', message: "TechFlow Solutions viewed your profile", time: "2 hours ago" },
    { id: 2, type: 'message', message: "New message from Sarah at Creative Studio", time: "5 hours ago" },
    { id: 3, type: 'status', message: "Application for 'Security Analyst' moved to 'In Review'", time: "1 day ago" },
    { id: 4, type: 'alert', message: "New job match: Senior React Dev found", time: "2 days ago" }
];

export const userProfile = {
    name: "Alex Johnson",
    role: "Full Stack Developer",
    completion: 85,
    visibility: true,
    appliedJobs: [1, 2],
    savedJobs: [4],
    stats: {
        views: 45,
        applications: 12,
        interviews: 3,
        matches: 8
    },
    notifications: [
        { id: 1, message: "Your application for Senior Frontend Engineer has been viewed.", date: "1 hour ago", read: false }
    ]
};
