import { useState } from "react";
import './css/LoginScreen.css';

const LoginScreen = () => {
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/instructors')

        const json = await response.json()

        console.log(json)
    }

    return (
        <form className="loginScreenForm" onSubmit={handleSubmit}>
            <h3>Enter your Login details</h3>
            
            <label>Email</label>
            {/*<input 
                type="email"
                onChange={(e) => set}
                value={}
            />*/}

            <button>Login</button>
        </form>
    )
}

export default LoginScreen;