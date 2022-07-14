import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ToDoList(props) {

    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();

    const addTask = (event) => {
        const text = inputRef?.current?.value;
        setTasks([...tasks, text]);
    }

    const editTask = (event) => {
        const id = parseInt(event.target.parentElement.id);
        inputRef.current.value = tasks[id];
    }

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
          response = await response.json()
          console.log(response);
        }
    
        fetchMyAPI()
    }, []);


    const deleteTask = () => {

    }


    return(
        <div className="todo">
            <h1>To Do List</h1>
            <div className="flex-container">
                <input ref={inputRef}></input><button onClick={addTask}>Add</button>
            </div>
            {
                tasks.length > 0 && tasks.map((value, index) => {
                        return(
                            <div className="flex-container">
                                <div className="flex-container">{value}</div>
                                <div className="rightmost" id={index}>
                                    <button onClick={editTask}>Edit</button>
                                    <button onClick={deleteTask}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
}