import axios from "axios";
import { useRef } from "react";
import "./register.css"
import {useNavigate, Link} from "react-router-dom"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("¡Passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user)
                navigate("/login")
            } catch (err) {
                console.log(err)
            }
            
        }

    }
    
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Memespace</h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on Memespace.
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="registerInput"/>
                        <input placeholder="Email" required ref={email} className="registerInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="registerInput" type="password" minLength="6"/>
                        <input placeholder="Password Again" required ref={passwordAgain} className="registerInput" type="password" minLength="6"/>
                        <button className="registerButton" type="submit">Sign Up</button>
                        <Link to="/login" className="registerRegisterButton">
                            <button className="registerRegisterButton">Log into account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
