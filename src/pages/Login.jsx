import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({setIsLoggedIn}){
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
    e.preventDefault()

    if(email === "Admin@admin.com" && password === "12345"){
    setIsLoggedIn(true);
    navigate("/dashboard")

    }else{
        setError(["Incorrect email or password",<br></br> ,"Please try again "])
    }
    }
    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>

    )
}
export default Login;