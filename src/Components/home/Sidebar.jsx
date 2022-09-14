import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <span><h1 className="sidebarTitle">About</h1></span>
    <div className="sidebarImgdiv"><img className="sidebarImg" src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="cricket"></img></div>
    <div className="sidebarText"><p className="sidebarText1">Technology is revolutionizing the sports.This website helps users to engage in blogs and discussions on how technology is shaping the future of sports.</p></div>
    <span><b><p className="categoriesTitle">Categories</p></b></span>
    <ul className="categories"><li className="item">Fitness</li><li className="item">Sports Wear</li><li className="item">Training</li><li className="item">Video Analysis</li>
    </ul>
    <span className="sidebarIcons">Follow us <i className="topIcons fa-brands fa-facebook"></i>
  <i className="topIcons fa-brands fa-instagram"></i>
  <i className="topIcons fa-brands fa-quora"></i>
  <i className="topIcons fa-brands fa-linkedin"></i></span></div>
  )
}
