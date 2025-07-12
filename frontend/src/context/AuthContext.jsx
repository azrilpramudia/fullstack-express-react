import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

    useEffect(() => {
        const interval = setInterval(() => {
            const tokenExists = !!Cookies.get('token');
            setIsAuthenticated(prev => {
                if (prev !== tokenExists) return tokenExists;
                return prev;
            });
        }, 1000); // cek setiap 1 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
