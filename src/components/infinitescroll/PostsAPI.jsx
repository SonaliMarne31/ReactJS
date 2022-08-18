import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

export default function PostsAPI (props) {

    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    const fetchData = () => {
        console.log('pageNo ', pageNo);
        axios
            .get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNo}&_limit=10`)
            .then((res) => {
                setData([...data, ...res.data]);
                // setPageNo(pageNo+1);
            })
            .catch(err => {
                console.log('Error while fetching data');
            });
    }

    useEffect(() => {
        fetchData(1);
    }, []);

    function handleScroll() { 
    
        var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
        if (isAtBottom) { 
            let pg = pageNo + 1;
            setPageNo(pg);
            fetchData();
        } 
        
    } 
    window.addEventListener("scroll", handleScroll);

    return(
        <>
            {
                data.map((item, i) => ( 
                    <Post title={item.title} body={item.thumbnailUrl} /> 
            ))} 
        </>
    );

}