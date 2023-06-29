import api from "../utils/api"
import { useState, useContext } from "react"
import "./Input.css"
import { Context } from "../context/UserContext";


const Register = () => {
    const [user, setUser] = useState([]);
    const {register} = useContext(Context)
    

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        register(user);
    }

    return(
        <div className="conteiner-register">

            <div className="form">
                <h2>Faça seu registro</h2>
                <form  onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label>Nome: </label>
                        <input type="text" name="name" placeholder="Digite seu nome" onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label>Email: </label>
                        <input type="email" name="email" placeholder="Digite seu email" onChange={handleChange}/>
                    </div>

                    <div className="form-control">
                        <label>password: </label>
                        <input type="password" name="password" placeholder="Digite sua senha" onChange={handleChange}/>
                    </div>

                    <div className="form-control">
                        <label>confirme sua senha: </label>
                        <input type="password" name="confipassword" placeholder="Confirme sua senha" onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label>Telefone: </label>
                        <input type="text" name="phone" placeholder="Digite seu telefone" onChange={handleChange}/>
                    </div>

                    <button type="submit">Enviar</button>

                </form>
            </div>

           
        </div>
    )
}

export default Register