import { useState } from "react";
import './css/LoginScreen.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/accounts');
        const json = await response.json();

        const matchedAccount = json.filter(item => item.email === email)[0];

        if (matchedAccount){
            console.log(matchedAccount);
            if (matchedAccount.password === password) {
                console.log(`You are routed to the ${matchedAccount.account_type}'s dashboard`);
                console.log(matchedAccount);
                // Routing code
            } else {
                console.log('Incorrect password.');
            }
        } else {
            console.log('That account does not exist.');
        }
        document.getElementById('loginEmailInput').value = '';
        document.getElementById('loginPasswordInput').value = '';

        // console.log(json);
        // console.log([email, password]);
        // console.log(matchedAccount);
    }

    return (
        <form className="loginScreenForm" onSubmit={handleSubmit}>
            <h3>Enter your Login details</h3>
            
            <label>Email</label>
            <input 
                id="loginEmailInput"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <label>Password</label>
            <input 
                id="loginPasswordInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />

            <button>Login</button>
        </form>
    )
}

export default LoginScreen;