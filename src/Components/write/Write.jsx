import "./write.css";

export default function Write() {
  return (
    <div className='write'>
        <form><div className="writeForm">
            <input className="writeFile" type='file'/>
            <input className="writeTitle" type='text' placeholder="Title"/><button className="publishButton">Publish</button></div>
            <div>
            <textarea className="writeText" placeholder="Tell your story....."></textarea>
            
        </div></form>
    </div>
  )
}
