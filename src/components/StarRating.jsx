import React, { useState } from "react";
import { AiOutlineStar } from 'react-icons/ai';

export default function StarRating(props) {

    const [currentRating, setCurrentRating] = useState(0);

    // const selectStar = (event) => {
    //     const starID = parseInt(event.target.parentElement.id);
    //     console.log('starID', starID);
    //     const isSelectedAlready = event.target.classList.contains('selected');
    //     let selected = document.getElementsByClassName('selected').length;


    //     for(let i = starID; i>0 ; i--) {
    //         let star = document.getElementById(i.toString());
            

    //         if(!isSelectedAlready) {
    //             star.firstChild.classList.add('selected');
    //         } else {
    //             star.firstChild.classList.remove('selected');
    //         }
    //     }
    // }

    const updateRating = (index) => {
        if(index == currentRating) {
            setCurrentRating(0);
        } else {
            setCurrentRating(index);
        }
    }

    return(
        <div className="center-text">
            <h3>Welcome to my Fun Page</h3>
            <div className="star-rating">Star Rating</div>
            <div className="stars">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return(
                        <button index={index} 
                            onClick={() => updateRating(index)}
                            className={index <= currentRating ? 'on' : 'off'}
                        >
                            <AiOutlineStar size={36}></AiOutlineStar>
                        </button>
                    )
                })

                }
            </div>
        </div>
    );
}