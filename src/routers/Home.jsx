import api from "../utils/api"
import { useEffect, useState, useContext } from "react"
import "./Home.css"
import { Context } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({})
    const {authenticated} = useContext(Context)
    const navigate = useNavigate();
    
    useEffect(() => {

        if(token){
            api.get("/users/pessoa", {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                }
            }).then((response) => {
                setUser(response.data)
                console.log(response.data)
            })
        }
       
    }, [token])

    console.log(user.name)

  
    return (
        <div className="conteiner-dados">

            <div className="content">
                {!authenticated && (
                    <p className="not-autenticad">Faça seu registro para ver suas informações</p>
                )}

                {authenticated && (
                    <>
                        <h2>Nome: <span>{user.name}</span></h2>
                        <p>Email: <span>{user.email}</span></p>
                        <p>Tel: <span className="number">({user.phone})</span></p>
                    </>
                )}
            </div>
           
        </div>
    )
}

export default Home