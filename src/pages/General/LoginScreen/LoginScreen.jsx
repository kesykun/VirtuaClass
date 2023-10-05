import { useState } from "react";
import './css/LoginScreen.css';
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:9600/api/accounts')

        const json = await response.json()

        const matchedAccount = json.filter(item=>item.email===email)

        const navigate = useNavigate();
        const navigateToAdminDash = () => {
            navigate('/admin');
        }

        if (matchedAccount){
            if (matchedAccount.password===password){
                navigate('/admin');
            }
        }

        console.log(json)
        console.log([email, password])
        console.log()
    }

    return (
        <form className="loginScreenForm" onSubmit={handleSubmit}>
            <h3>Enter your Login details</h3>
            
            <label>Email</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button>
        </form>
    )
}

export default LoginScreen;