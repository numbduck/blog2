import "./settings.css";

export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
    <span className='settingsTitle'><i class="settingsTitleicon fa-solid fa-gears"></i> Update Your Account</span><span className='settingsDelete'><i class="fa-solid fa-trash-can"></i>  Delete Account</span>
    <div className="settingsPP"><img className="settingsImage" src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
    <input type='file' id="fileinput" style={{display:"none"}}></input><label htmlFor="fileinput"><i class="settingsPPicon fa-solid fa-circle-user"></i></label></div>
    <div className="settingsInput"><form className="settingsForm">
    <label className="settingsItem"><b>Email</b></label><input className="settingsItem2" type='email' placeholder="email"></input>
    <label className="settingsItem"><b>Username</b></label><input className="settingsItem2" type='text' placeholder="username"></input>
    <label className="settingsItem"><b>Password</b></label><input className="settingsItem2" type='password' placeholder='password'></input>
    <button className="button">Submit</button>
    </form></div></div>
    </div>
  )
}
