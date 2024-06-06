
const Reducer = (state,action) => {
    switch (action.type) {
        case "ADD_POST": {
            const AddPost = action.payload.post;
            return{posts : [AddPost,...state.posts]}
        }
        case "clear_All": {
            return{posts : []};
        }



        case 'DELETE':
            return {
              ...state,
              posts: state.posts.filter(task => task !== action.payload.task),
            };

  
    
        default:
           return state;
    }

}



export default Reducer;


