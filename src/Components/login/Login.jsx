import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login/Register</span>
        <form className="loginForm"><br/>
                <label className="loginLabel">Email</label>
                <input className="loginInput" placeholder="enter your email"></input>
                <label>Password</label>
                <input className="loginInput" placeholder="enter password"></input>
                <button className="loginButton">Enter</button>
                <button className="loginButton">Register</button>
            </form>
        
        
    </div>
  )
}
