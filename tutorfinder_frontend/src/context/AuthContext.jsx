import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserDetailsApi } from '../apis/api';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

    const savedUser = localStorage.getItem('user');
    const [user, setUser] = useState(null);
    const [localUser, setLocalUser] = useState(savedUser ? JSON.parse(savedUser) : null);
    const [isUpdated, setIsUpdated] = useState(false);

    const getUserById = async (userId) => {
        try {
            const response = await getUserDetailsApi(userId);
            const userData = response.data.user;
            setUser(userData);
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    };

    useEffect(() => {
        if (localUser?._id) {
            getUserById(localUser._id);
        }
    }, [localUser, isUpdated]);

    return (
        <AuthContext.Provider value={{ user, setUser, setLocalUser, setIsUpdated, isUpdated }}>
            {children}
        </AuthContext.Provider>
    );
};
