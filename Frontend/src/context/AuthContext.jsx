import { createContext, useContext, useEffect, useState } from 'react'
import { registerRequest, signInRequest, verifyTokenRequest } from '../api/auth.js'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data.message)
        }
    }

    const signin = async (user) => {
        try {
            console.log(user)
            const res = await signInRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data.message)
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogIn() {
            const cookies = Cookies.get()
            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return
            }
            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) return setIsAuthenticated(false)
                setIsAuthenticated(true)
                setLoading(false)
                setUser(res.data)
            } catch (error) {
                setIsAuthenticated(false)
                setLoading(false)
            }
        }
        checkLogIn()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                user,
                isAuthenticated,
                loading,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}