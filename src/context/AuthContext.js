import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = () => {
        setIsLogin(true);
    }
    const logout = () => {
        setIsLogin(false);
    }

    const contextData = {
        isLogin,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}