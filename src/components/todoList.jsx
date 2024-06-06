import { useContext } from "react";
import Todo from "./todo";
import { PostContext } from "../App";



const List = () => {

    const {state,dispatch} = useContext(PostContext);


    const handleDeleteAll = () => {
        dispatch({type:"clear_All"})
    }

    return (
        <div className="todoList">
            <div className="list">
            <h4>List of Tasks</h4>
            <button onClick={handleDeleteAll}>Clear All</button>
            </div>
        {
          state.posts &&  state.posts.map((post,index) => <Todo key={index} task={post}/>)
          
        }
        </div>
    )
}
export  default List;