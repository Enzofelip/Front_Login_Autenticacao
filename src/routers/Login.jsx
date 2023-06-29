import { useState, useContext} from "react"
import { Context } from "../context/UserContext";


const Login = () => {
    const [user, setUser] = useState({})
    const {login} = useContext(Context)
   
    

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        login(user)
    }
    return(
        <div className="conteiner-register">
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Email: </label>
                        <input type="email" name="email" placeholder="Digite seu email" onChange={handleChange}/>
                    </div>

                    <div className="form-control">
                        <label>password: </label>
                        <input type="password" name="password" placeholder="Digite sua senha" onChange={handleChange}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
           
        </div>
        
    )
}

export default Login