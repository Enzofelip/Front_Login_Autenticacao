import { useState, useEffect } from "react"
import api from "../utils/api"
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

export default function  useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true)
        }
       
    }, [])

    const register = async(user) => {
        try{
            const res = await api.post("/users/register", user)

            toast.success(res.data.message)
            navigate("/login")
        }catch(error){
            toast.error(error.response.data.message);
            console.log(error.response.data.message)
        }
    }

    const  login = async(user) => {
        try{
            const res = await api.post("/users/login", user)

            console.log(res.data)

            localStorage.setItem('token', JSON.stringify(res.data.token))
            setAuthenticated(true)

            toast.success(res.data.message)
            navigate("/")
        }catch(error){
            toast.error(error.response.data.message)
        }
    }

    const logout = async() => {
        setAuthenticated(false)

        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined
    }

    return{authenticated, register, login, logout}
}