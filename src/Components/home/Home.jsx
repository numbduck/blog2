import Header from "./Header"
import Sidebar from "./Sidebar";
import Posts from "../Posts/Posts";
import SinglePost from "../single/SinglePost";
import Write from "../write/Write";
import Settings from "../Settingsfolder/Settings"
import Login from "../login/Login";
import Register from "../login/Register.jsx";
import "./home.css";
export default function Home() {
  return (<div><Header /><div className="homeBody"><Posts /><Sidebar /></div></div> 
   ) 
}
{/* <Write /><Sidebar /><SinglePost /></div>*/}
