import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function AllComponents (props) {

    const tabs = ['Todo', 'Star', 'Tab3'];
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const starWidget = useRef(null);

    const onChange = (tabName) => {
        setCurrentTab(tabName)
    }

    const changeStar = (starIdx) => {
        if(starIdx == currentIndex) {
            console.log(starWidget);
        } else {
            setCurrentIndex(starIdx);
        }
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then((res) => {
                setData(res.data.todos);
                console.log(res.data.todos);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return(
        <>
            <h1>Demo App</h1>
            <div>Tabs Display</div>
            <div>
                {
                    tabs.map((tab, index) => {
                        return(
                            <div className="tab-list">
                                <button className='tab-btn' onClick={() => onChange(tab)}>{tab}</button>
                            </div>
                        );
                    })
                }
                {
                    tabs.map((tab, index) => {
                        return(
                            <div hidden={currentTab != tab}>{tab} selected
                                { tab == 'Todo' && data.length >0 &&
                                    data.slice(0,10).map((d, index) => {
                                        return(
                                            <div>{d.todo}</div>
                                        );
                                    })
                                }
                                <br></br>
                                <div className="stars" ref={starWidget}>
                                    {
                                        tab == 'Star' && [...Array(5)].map((a, index) => {
                                            return(
                                                <button index={index} onClick={() => changeStar(index)}
                                                    className={index <= currentIndex ? 'on' : 'off'}>
                                                    S
                                                </button>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            
                        );
                    })
                }
            </div>
        </>
    );
}