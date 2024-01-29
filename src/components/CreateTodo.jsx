import { useState,useRef,useContext } from "react";
import { PostContext } from "../App"; 


const Titile = () => {
    const [title,setTitle] = useState("")
    const titleRef = useRef();
    const {dispatch} =useContext(PostContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        if ( title !== "") {
            // const newTask = {title,id:Date.now()}
            dispatch({type:"ADD_POST",payload: {post:title}})

        }

        setTitle("")
        titleRef.current.focus()
        
    }
    
    return (
        <div className="">
            <div className="todo">
            <form onSubmit={handleSubmit}>
                <input type="text"  name="" id="" placeholder="Add New Task"
                 onChange={(event) => setTitle(event.target.value)}
                 value={title}
                 ref={titleRef}
                 />
                <button type="submit">Post</button>
            </form>
            </div>
        </div>
    )
}
export  default Titile;

