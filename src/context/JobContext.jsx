import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { jobs as initialJobs, userProfile as initialProfile } from '../data/mockData';

const JobContext = createContext(undefined);

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState(initialJobs);
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user_profile');
        const isLoggedIn = localStorage.getItem('user_is_logged_in') === 'true';
        const role = localStorage.getItem('user_role') || 'seeker';
        const profile = saved ? JSON.parse(saved) : initialProfile;
        return { ...profile, isLoggedIn, role };
    });
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    const [notifications, setNotifications] = useState(initialProfile.notifications);

    useEffect(() => {
        localStorage.setItem('user_profile', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    const applyToJob = (jobId) => {
        if (user.appliedJobs.includes(jobId)) return;

        setUser(prev => ({
            ...prev,
            appliedJobs: [...prev.appliedJobs, jobId]
        }));

        const newNotif = {
            id: Date.now(),
            message: `You successfully applied for ${jobs.find(j => j.id === jobId)?.title}`,
            date: 'Just now',
            read: false
        };
        setNotifications(prev => [newNotif, ...prev]);
    };

    const saveJob = (jobId) => {
        setUser(prev => {
            const isSaved = prev.savedJobs.includes(jobId);
            return {
                ...prev,
                savedJobs: isSaved
                    ? prev.savedJobs.filter(id => id !== jobId)
                    : [...prev.savedJobs, jobId]
            };
        });
    };

    const login = (role) => {
        setUser(prev => ({ ...prev, role, isLoggedIn: true }));
        localStorage.setItem('user_is_logged_in', 'true');
        localStorage.setItem('user_role', role);
    };

    const logout = () => {
        setUser(prev => ({ ...prev, isLoggedIn: false }));
        localStorage.removeItem('user_is_logged_in');
        localStorage.removeItem('user_role');
    };

    const value = useMemo(() => ({
        jobs,
        user,
        notifications,
        isDarkMode,
        toggleTheme,
        applyToJob,
        saveJob,
        setJobs,
        login,
        logout
    }), [jobs, user, notifications, isDarkMode]);

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (!context) throw new Error('useJobContext must be used within a JobProvider');
    return context;
};
