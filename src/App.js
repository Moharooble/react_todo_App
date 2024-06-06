import { useState,createContext,useContext,useReducer} from "react";
import './main.css'
import Titile from "./components/CreateTodo";
import List from "./components/todoList";
import Reducer from "./Reducer";
import Login from "./components/login"

export const PostContext= createContext({posts:[]});





function App() {
  
  let [username,setUsername] = useState("")
  const [dis,setdis] = useState([])
  const intial = useContext(PostContext);
  const [state,dispatch]= useReducer(Reducer,intial)

  if (!username) {
    return <Login userN={setUsername}/>;
  }

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
