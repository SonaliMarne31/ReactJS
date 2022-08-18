import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


export default function SearchJson (props) {
    const [persons, setPersons] = useState([]);
    const [filterArr, setFilteredArray] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setPersons(persons);
            })
    }, []);


    const filterPersons = (event) => {
        const inputValue = event.target.value;

        const filterResult = persons.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredArray(filterResult);
    }

    return(
        <>
            <div>Search JSON</div>
            <input placeholder="...Search" onChange={filterPersons}></input>
            {
                filterArr.map((person, index) => {
                    return(
                        <div>{person.name}</div>
                    );
                })
            }
        </>
    )


}