import React from "react";
import { useState } from "react";

export default function Game(props) {

    const n = 3;
    const [status, setStatus] = useState('Yet to Start');
    const [clickCount, setClickCount] = useState(0);
    const [xIndex, setXIndex] = useState([]);
    const [oIndex, setOIndex] = useState([]);

    const buttonText = {
        1: 'X',
        2: '0'
    };

    const checkWinner = () => {

        let winnerRules = [
            [1,4,7],
            [1,2,3],
            [2,5,8],
            [4,5,6],
            [3,6,9],
            [7,8,9],
            [1,5,8],
            [3,5,7]
        ]

        let oWins = false;
        let xWins = false;
       

        winnerRules.forEach(rule => {
           
            xWins = rule.every((value) => xIndex.includes(value)) || xWins;
            
        });

        winnerRules.forEach(rule => {
           
            oWins = rule.every((value) => oIndex.includes(value)) || oWins;
            
        });
        // const whichXSet = winnerRules.some((set, index) => {
        //     if(set.every(val => {
        //         xIndex.includes(val)
        //     })) {
        //         return true;
        //     }

        // });
        console.log('xWins ', xWins, ' oWins ', oWins);
        if(xWins && oWins) {
            setStatus(' Both Win ');
        } else if (oWins) {
            setStatus(' O is the Winner ');
        } else if (xWins) {
            setStatus(' X is the Winner ');
        } else {
            setStatus('Indeterminate');
        }

    }

    const clickBtn = (event) => {
        
        let count = clickCount + 1;
        if(count == 1) {
            setStatus('Game Started');
        }
        setClickCount(count);
        console.log('count ', count);
        const targetBtn = event.target;
        const index = count % 2 == 0 ? 2 : 1
        if(index == 1) {
            setXIndex([...xIndex, parseInt(targetBtn.id)]);
        } else {
            setOIndex([...oIndex, parseInt(targetBtn.id)]);
        }
        targetBtn.innerHTML = buttonText[index];
        if(count == 9) {
            checkWinner();
        }
    }

    return (
        <div className="board">
            <div className="status">{status}</div>
            <div className="row">
                <button id='1' onClick={clickBtn}></button>
                <button id='2' onClick={clickBtn}></button>
                <button id='3' onClick={clickBtn}></button>
            </div>
            <div className="row">
                <button id='4' onClick={clickBtn}></button>
                <button id='5' onClick={clickBtn}></button>
                <button id='6' onClick={clickBtn}></button>
            </div>
            <div className="row">
                <button id='7' onClick={clickBtn}></button>
                <button id='8' onClick={clickBtn}></button>
                <button id='9' onClick={clickBtn}></button>
            </div>
        </div>
    )
}
