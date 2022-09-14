import Sidebar from "../home/Sidebar";
import "./singlePost.css"
import image from "./stats.jpg";

export default function SinglePost() {
    return (<div className="homebody">
        <div className='singlepost'><img className="singlepostImage" alt="swimming" src="https://images.unsplash.com/photo-1487491506942-373c8f7a7ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80">
        </img><div className="singlepostContent">
        <span className="singlepostCategory"><b>Fitness</b></span>
        <span className="singlepostTitle"><b>Swimming with Smart Band</b></span>
        <span className="singlepostDate"><i>1 hour ago</i></span>
        <span className="author">Author : <b>Aditya</b></span><i class="singlepostIcon fa-solid fa-pen-to-square"></i><i class="singlepostIcon fa-regular fa-trash-can"></i><p className="singlepostText">Swimming is considered as one of the best whole body exercises to keep your body healthy and in shape.Smart watches/bands can help you a great deal in keeping track of your swimming routine.Swimming is not restricted to age rather swimming is suggested by various health experts to supplement any individuals fitness goals.With the introduction of IOT and miniaturization of hardware chips,Smart devices have become a part of our life.<br/>Smart watches are a great way to track your fitness progress and it can help to record your swimming sessions.They are waterproof and can survive water upto 50 m,although swimming pools are usually 5ft to 10ft deep.Here is an example of a swimming session recorded with Honor Band 5: </p>
        <div className="stats"><img alt="swimming stats" className="swimmingStats" src={image}></img></div>
        <p className="singlepostText">
<b>Swimming laps</b> refer to the number of laps you swim in a pool. (Unit: lap)<br/>

<b>Stroke identification</b> is used to identify your swimming stroke.<br/>

<b>Strokes</b> refer to the cumulative number of full stroke movements. (This varies by swimming stroke. For breaststroke and butterfly, both hands move together, so each time the arms move is a full movement and counts as a stroke. For freestyle and backstroke both hands move separately, so both arms need to enter the water once for it to count as one stroke.) (Unit: time)<br/>


<b>Stroke rate</b> refers to how many strokes are done each minute. (Unit: strokes per minute)<br/>

<b>SWOLF</b> is a way of measuring your swimming efficiency. It is calculated per length (ideally in a 50-meter swimming pool) by adding the time it took you to swim the length and the number of strokes it took you to swim it A smaller value indicates a higher efficiency.</p>
        </div></div><Sidebar/></div>
    )
}
