import React from "react";
import { useState } from "react";

export default function Tabs(props) {
    const [activeTab, setActiveTab] = useState('English');
    // const tabs = props.tablist;
    const tabs = [
        {
            "code": "en",
            "name": "English"
        },
        {
            "code": "fr",
            "name": "French"
        },
        {
            "code": "ge",
            "name": "German"
        }
    ];

    const lang = [
        {
            'default': 'Welcome',
            'language': {
                'en' : 'Welcome',
                'fr' : 'French Welcome',
                'ge' : 'German Welcome'   
            }
        }
    ]

    console.log(tabs);

    const changeTab = (tabName) => {
        setActiveTab(tabName);
    }

    return(
        <div>
            {
                tabs.map((tab, index) => {
                    return(
                        <div className="tab-list">
                            <button className='tab-btn' onClick={() => changeTab(tab.name)}>{tab.name}</button>
                        </div>
                    );
                })
            }
            {
                tabs.map((tab, index) => {
                    return(
                        <div className="tab-content" hidden={activeTab != tab.name}> {tab.code} </div>
                    );
                })
            }
        </div>
    );
}