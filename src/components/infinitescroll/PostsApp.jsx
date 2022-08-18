import React from "react";
import { useState } from "react";
import Post from "./Post";

export default function PostsApp (props) {

    const text = "Here is some post text body ....";
    const postsPerPage = 10;

    const [posts, setPosts] = useState([...Array(postsPerPage).keys()]);
    const [postNumber, setPostNumber] = useState(postsPerPage);

    function handleScroll() { 
    
        var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
        var num;
        if (isAtBottom) { 
          
          // Load next posts 
          num = postsPerPage + postNumber;
          setPostNumber(num);
          setPosts([...Array(num).keys()]);
          
        } 
        
    } 
    window.addEventListener("scroll", handleScroll);

    return(
        <>
            {
                posts.map((item, i) => ( 
                    <Post title={"Post " + (i + 1)} body={text} /> 
            ))} 
        </>
    );
}
