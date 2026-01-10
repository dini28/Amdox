import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { jobs as initialJobs, userProfile as initialProfile } from '../data/mockData';
import { useAuth } from './AuthContext';

const JobContext = createContext(undefined);

export const JobProvider = ({ children }) => {
    const { user: authUser, isAuthenticated } = useAuth();
    const [jobs, setJobs] = useState(initialJobs);

    // Merge auth user with profile data if needed, or just use authUser
    // For now, we'll keep the mock profile structure but prefer auth data
    const [user, setUser] = useState(initialProfile);

    // Sync auth user to local state when it changes
    useEffect(() => {
        if (authUser) {
            setUser(prev => ({
                ...prev,
                ...authUser,
                isLoggedIn: true,
                role: authUser.role
            }));
        } else {
            // Reset to initial profile but logged out
            setUser({ ...initialProfile, isLoggedIn: false, role: 'seeker' });
        }
    }, [authUser]);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    const [notifications, setNotifications] = useState(initialProfile.notifications);

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
        if (user.appliedJobs && user.appliedJobs.includes(jobId)) return;

        setUser(prev => ({
            ...prev,
            appliedJobs: [...(prev.appliedJobs || []), jobId]
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
            const currentSaved = prev.savedJobs || [];
            const isSaved = currentSaved.includes(jobId);
            return {
                ...prev,
                savedJobs: isSaved
                    ? currentSaved.filter(id => id !== jobId)
                    : [...currentSaved, jobId]
            };
        });
    };

    const value = useMemo(() => ({
        jobs,
        user,
        notifications,
        isDarkMode,
        toggleTheme,
        applyToJob,
        saveJob,
        setJobs
    }), [jobs, user, notifications, isDarkMode]);

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (!context) throw new Error('useJobContext must be used within a JobProvider');
    return context;
};
