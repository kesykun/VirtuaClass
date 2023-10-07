import { useState } from "react";
import './css/LoginScreen.css';
import { useNavigate } from "react-router-dom";

const LoginScreen = ({setCurrentUser}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/accounts');
        const json = await response.json();

        const matchedAccount = json.filter(item=>item.email === email)[0];

        

        if (matchedAccount) {
            // console.log(matchedAccount.user_id);
            if (matchedAccount.password === password) {
                const path = `/api/${matchedAccount.account_type}/${matchedAccount.user_id}`;
                // console.log(`Fetching ${path}`);
                fetch(path).then(result => {
                    return result.json();
                }).then(value =>{
                    setCurrentUser(value);
                    console.log(value);
                    sessionStorage.setItem('currentUser', JSON.stringify(value));
                    navigate('/admin');
                });
            }
            else if (matchedAccount.password === password){
                console.log("Incorrect password.");
            }
        }
        else if (!matchedAccount){
            console.log("Email does not exist.");
        }

        // console.log(json);
        // console.log([email, password]);
        // console.log(matchedAccount);
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