import { Link } from "react-router-dom";
import "./post.css"

function Post1() {
  return (
    <div className="post">
    <img className="postsImage" alt="swimming" src="https://images.unsplash.com/photo-1487491506942-373c8f7a7ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80">
    </img><div className="postsContent"><span className="postsCategory">
    <b><Link className="link" to="/singlepost">Fitness</Link></b></span>
    <span className="postsTitle"><b><Link className="link" to="/singlepost">Swimming with Smart Band</Link></b></span><hr/><p className="postsText">
    Swimming is considered as one of the best whole body exercises to keep your body healthy and in shape.
    Smart watches/bands can help you a great deal in keep track of your swimming routine...
    </p><span className="postsDate">1 hour ago</span></div></div>
      
  )
}
function Post2() {
  return (
    <div className="post">
    <img className="postsImage" alt="food" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
    </img>
    <div className="postsContent"><span className="postsCategory"><b><Link className="link" to="/singlepost">Nutrition</Link></b></span>
    <span className="postsTitle"><b><Link className="link" to="/singlepost">Diet and Nutrition</Link></b></span><hr/><p className="postsText">Good nutrition can enhance sporting performance. A well-planned, nutritious diet should meet most of an athlete's vitamin and mineral needs, and provide enough protein to promote muscle growth and repair. Foods rich in unrefined carbohydrates, like wholegrain breads and cereals, ...</p><span className="postsDate">1 hour ago</span></div></div>
      
  )
}
export {Post1, Post2};