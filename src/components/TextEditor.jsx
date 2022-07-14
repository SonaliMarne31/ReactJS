import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function(props) {

    const textRef = useRef();


    const changeText = () => {
        const textbox = textRef?.current;
        console.log('text ', textbox);
    }

    const changeTextCSS = (event) => {
        const textbox = textRef?.current;
        const id = event.target.id;

        if(id === 'bold') {
            textbox.style.fontWeight = 'bold';
        } else if (id === 'italics') {
            textbox.style.fontStyle = 'italic';
        } else {
            textbox.style.fontStyle = 'none';
        }
        
    }

    const [time, setTime] = useState('');
    const clockRef = useRef();

    const showTime = () => {
        let time = new Date();
        let fullTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        let timer = clockRef?.current;
        // timer.innerText = fullTime;
        setTime(fullTime);
    }


    setInterval(showTime, 1000);

    return(
        <div className="board">
            
            <div ref={clockRef} className="clock">
                Time : {time}
            </div>


            <div className="flex-row">
                <button id='bold' className="text-editor-btn" onClick={changeTextCSS}>Bold</button>
                <button id='italics' className="text-editor-btn" onClick={changeTextCSS}>Italic</button>
                <button id='normal' className="text-editor-btn" onClick={changeTextCSS}>Normal</button>
            </div>
            <textarea className="texteditor" ref={textRef} onChange={changeText}></textarea>
        </div>
    );

}