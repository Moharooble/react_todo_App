import { useState,createContext,useContext,useReducer} from "react";
import './main.css'
import Titile from "./components/CreateTodo";
import List from "./components/todoList";
import Reducer from "./Reducer";

export const PostContext= createContext({posts:[]});





function App() {
  const [dis,setdis] = useState([])
  const intial = useContext(PostContext);
  const [state,dispatch]= useReducer(Reducer,intial)
 

  return (
    <PostContext.Provider value={{state,dispatch}}>
          <div className="container">
      <Titile  />
      <List />
      
    </div>

    </PostContext.Provider>


  );
}

export default App;
