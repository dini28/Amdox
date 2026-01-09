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
        color: "bg-blue-600"
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
        color: "bg-purple-600"
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
        color: "bg-green-600"
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
        color: "bg-red-600"
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
        color: "bg-orange-600"
    }
];

export const userProfile = {
    name: "Alex Johnson",
    role: "Full Stack Developer",
    appliedJobs: [1, 2],
    savedJobs: [4],
    notifications: [
        { id: 1, message: "Your application for Senior Frontend Engineer has been viewed.", date: "1 hour ago", read: false }
    ]
};
