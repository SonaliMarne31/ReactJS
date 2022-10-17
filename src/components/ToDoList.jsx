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

        async function fetchMyAPI1() {
            // let response = await fetch('https://jsonmock.hackerrank.com/api/movies?Year=2015');
            // response = await response.json()
            // console.log(response);

            // return new Promise((resolve, reject) => {
            //     const req = https.get('https://jsonmock.hackerrank.com/api/movies?Year=2015', (res) => {
                    
            //         res.on('data', (chunk) => {
                
            //             body += chunk;
            //         });
        
            //         res.on('end', () => {
            //                 let i=0;
            //                 let jsonData = JSON.parse(body);
            //                 let movies = jsonData.data;
            //                 let titles = movies.map((m) => m.Title);
            //                 let titleStr = ''; //titles.length > 0 ? '' : "No Results Found";
            //                 for(i=0; i<titles.length; i++) {
            //                     titleStr += titles[i];
            //                     if(i!=titles.length-1) {
            //                         titleStr += '\n';
            //                     }
            //                 }
            //                 console.log(titleStr);
            //                 resolve(titleStr);
            //         });

            //     });

            // });
        }
    
        fetchMyAPI();

        fetchMyAPI1();


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