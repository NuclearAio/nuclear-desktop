import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

import { useNavigate } from 'react-router-dom';

import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(()=>null)
    const [user, setUser] = useState(()=>null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        isTokensStoredInLocalStorage()
    }, [])

    useEffect(()=>{
        if(loading){
            updateTokens()
        }
        const fourMinutes = 1000 * 60 * 4

        const interval =  setInterval(()=> {
            if(authTokens){
                updateTokens()
            }
        }, fourMinutes) 
        return ()=> clearInterval(interval)
    }, [authTokens, loading])


    const navigate = useNavigate()

    const isTokensStoredInLocalStorage = () =>{
        const authTokensFromLocalStorage = window.localStorage.getItem('authTokens')
        if(authTokensFromLocalStorage){
            const authTokensParse = JSON.parse(window.localStorage.getItem('authTokens'))
            setAuthTokens(authTokensParse)
            setUser(jwt_decode(authTokensParse.access))
        }
        setLoading(false)
        navigate("/dashboard")
    }

    const login = async(username, password) =>{
        const data = await window.authApi.getAuthTokens(username, password)
        if(!data){
            return false
        }
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        window.localStorage.setItem('authTokens', JSON.stringify(data))
        return navigate('/dashboard')
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        window.localStorage.removeItem('authTokens')
        navigate("/login")
    }

    const updateTokens = async() => {
        const data = await window.authApi.updateTokens(authTokens.refresh, authTokens.access)
        if(data){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            window.localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            logoutUser()
        }
        if(loading){
            setLoading(false)
        }
    }

    // console.log("auth tokens", authTokens)
    // console.log("users", user.username)

    const contextData = {
        login: login,
        logoutUser: logoutUser,
        authTokens: authTokens,
        user:user,
    }
    return(
        <AuthContext.Provider value={contextData} >
           {loading ? null: children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;