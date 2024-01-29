
import React, { useContext, useReducer, useState } from 'react';
import { PostContext } from "../App";


const Todo = ({task}) => {
    
    const [isChecked, setChecked] = useState(false);

    const {dispatch} = useContext(PostContext)

    const handleDelete = () => {
        dispatch({type:"DELETE", payload: { task } })
    }

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div className="too">
            <div className="toli">
                <p className={`para ${isChecked ? 'complate' : ''}`}>{task}</p>
                <div className="icons">
                    <label className="checkbox-container">
                        <input type="checkbox" name="" id="check" onChange={handleCheckboxChange} />
                    </label>
                    <label htmlFor="">
                        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Todo;


