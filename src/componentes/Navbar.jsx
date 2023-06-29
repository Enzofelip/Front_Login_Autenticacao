import "./Navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react"

import { Context } from "../context/UserContext"
const Navbar = () => {
    const {authenticated, logout} = useContext(Context)

    return(
        <nav className="navbar">
            <h2><Link to="/">Autenticação</Link></h2>

            <ul>
                {authenticated ? (
                    <>
                        <li><Link to="/register">Registro</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li className="btn-exit" onClick={logout}>Sair</li>
                    </>
                ): (
                    <>
                        <li><Link to="/register">Registro</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
             
            </ul>
        </nav>
    )
}

export default Navbar