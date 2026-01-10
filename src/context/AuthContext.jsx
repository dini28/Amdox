import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Failed to parse stored user", error);
                localStorage.removeItem('auth_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = (email, password, role) => {
        setIsLoading(true);
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // In a real app, validation would happen here
                const mockUser = {
                    id: Date.now().toString(),
                    email,
                    role, // 'seeker' or 'employer'
                    name: email.split('@')[0], // Placeholder name
                    avatar: null
                };

                setUser(mockUser);
                setIsAuthenticated(true);
                localStorage.setItem('auth_user', JSON.stringify(mockUser));
                setIsLoading(false);
                resolve(mockUser);
            }, 800);
        });
    };

    const registerSeeker = (data) => {
        setIsLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    ...data,
                    id: Date.now().toString(),
                    role: 'seeker',
                    avatar: null
                };
                setUser(newUser);
                setIsAuthenticated(true);
                localStorage.setItem('auth_user', JSON.stringify(newUser));
                setIsLoading(false);
                resolve(newUser);
            }, 1000);
        });
    };

    const registerEmployer = (data) => {
        setIsLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    ...data,
                    id: Date.now().toString(),
                    role: 'employer',
                    avatar: null // company logo could go here
                };
                setUser(newUser);
                setIsAuthenticated(true);
                localStorage.setItem('auth_user', JSON.stringify(newUser));
                setIsLoading(false);
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('auth_user');
        // Optional: Clear other app data from local storage
    };

    const value = useMemo(() => ({
        user,
        isAuthenticated,
        isLoading,
        login,
        registerSeeker,
        registerEmployer,
        logout
    }), [user, isAuthenticated, isLoading]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
