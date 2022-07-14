import React, { useState } from "react";

export default function Search() {


    const array = [
        'HTML',
        'CSS',
        'Javascript',
        'PHP',
        'ReactJS',
        'Java'
    ];

    const [filteredArray, setFilteredArray] = useState(array);

    const changeInput = (event) => {
        const inputValue = event.target.value;

        const filterResult = array.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredArray(filterResult);
    }

    return(
        <div className="search-container">
            <input placeholder="Search..." onChange={changeInput}></input>
            <div className="search-list">
                {
                    filteredArray.map((item, index) => {
                        return(
                            <div className="item">{item}</div>
                        );
                    })
                }
            </div>
        </div>
    );
}