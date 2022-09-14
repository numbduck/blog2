import Topbar from "./Components/Topbar/Topbar.jsx";
import Home from "./Components/home/Home.jsx";
import Write from "./Components/write/Write.jsx";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Login from "./Components/login/Login.jsx";
import SinglePost from "./Components/single/SinglePost.jsx";
import Settings from "./Components/Settingsfolder/Settings.jsx";


function App() {
    const user=true;
 return(<Router>
    <Topbar />
    <Routes>
    <Route eaxt path="/" element={<Home/>}/>
    <Route path="/write" element={user ? <Write/> : <Login/>}></Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singlepost" element={<SinglePost/>}/>
    <Route path="/settings" element={user ? <Settings/> : <Login/>}/>
    </Routes>
    </Router>
 )
  
}

export default App;
