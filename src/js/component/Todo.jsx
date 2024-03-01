import React, { useState } from "react";




const Todo = () => {
    const [newTodolist, setnewtodolist] = useState([]);

    const [input, setinput] = useState("")

    function handleChange(event) {
        setinput(event.target.value);
    }
    const handleButtonClick = () => {
        setnewtodolist([...newTodolist, input])
    }

    const deleteList = (index) => {
        setnewtodolist(newTodolist.filter((item, idx) => index !== idx));
    }



    return (

        <div className="text-center">
            <h1 className="text-center mt-5">To-Do-List</h1>
            <input type="text" placeholder="If you see this green button... bootstrap is working..." onChange={handleChange} />
            <div className="list">
              <ul>
                <li>
                    newTodolist.map((item,index) =>) {

                    
                    <p>{item}</p>
                    }
                    
                </li>
              </ul>
            </div>

            <button onClick={handleButtonClick}>Add Input</button>
        </div>

    )
}

export default Todo;
