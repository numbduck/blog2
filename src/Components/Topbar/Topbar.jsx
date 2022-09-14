import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user= true;
  return (<div className="topbar">
  <div className="topleft">
  <i className="topIcons fa-brands fa-facebook"></i>
  <i className="topIcons fa-brands fa-instagram"></i>
  <i className="topIcons fa-brands fa-quora"></i>
  <i className="topIcons fa-brands fa-linkedin"></i>
  </div>
  <div className="topcenter"><ul className="topMenu">
  <li className="topMenuItem"><Link className="link" to="/">HOME</Link></li>
  <li className="topMenuItem"><Link className="link" to="/">ABOUT</Link></li>
  <li className="topMenuItem"><Link className="link" to="/WRITE">WRITE</Link></li>
  <li className="topMenuItem"><Link className="link" to="/">CONTACT</Link></li>
  <li className="topMenuItem">{user && "LOGOUT"}</li>
  </ul></div>
  <div className="topright">
  {user ? <img className="topRightImage" src="https://scontent.fdel1-1.fna.fbcdn.net/v/t1.6435-9/91808922_3080282248682722_5271661898700423168_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DjTmfp6pPxsAX85ENS5&_nc_ht=scontent.fdel1-1.fna&oh=00_AT8vPt2F56NHfwu5_-DtptjqO60_VbuFlSTYKCF8lMAhiw&oe=632319BA" alt="aditya"></img> : <Link className="link" to="/Login">LOGIN</Link> }
  
  <i class="topIcons fa-solid fa-magnifying-glass"></i></div>
  </div>
  )
}
