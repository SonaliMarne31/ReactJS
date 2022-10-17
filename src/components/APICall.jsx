import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function APICall(props) {

    const [data, setData] = useState([]);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        
        // using axios
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${1}&_limit=10`)
            .then((res) => {
                setData(res.data);
        }).catch((err) => {
            console.log(err);
        });

        // fetch - await 
        async function fetchMyAPI() {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            response = await response.json()
            console.log(response);
            setTodoList(response.splice(0, 19));
        }

        fetchMyAPI();


    }, []);

    return(
        <div className="center-text">
            <h3>Welcome to my API Call Tutorial</h3>
            {
                data.length > 0 && data.map((row, index) => {
                    return(
                        <div>{row.title}</div>
                    );
                })
            }
            <h3>TODO List</h3>
            {
                todoList.length > 0 && todoList.map((list, index) => {
                    return(
                        <div>
                            {list.title}
                        </div>
                    );
                })
            }
        </div>
    );
}