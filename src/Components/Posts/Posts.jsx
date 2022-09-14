import "./posts.css"
import {Post1, Post2} from "./Post.jsx"

export default function Posts() {
  return (
    <div className="posts"><Post1 />
    <Post2 />
    <Post1 />
    <Post2 />
    </div>
  )
}
