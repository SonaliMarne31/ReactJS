import React from "react";
import { useState } from "react";

export default function Tabs(props) {
    const [activeTab, setActiveTab] = useState('');
    const tabs = props.tablist;

    console.log(tabs);

    const changeTab = (tabName) => {
        setActiveTab(tabName);
    }

    return(
        <div>
            {
                tabs.map((tabname, index) => {
                    return(
                        <div className="tab-list">
                            <button className='tab-btn' onClick={() => changeTab(tabname)}>{tabname}</button>
                        </div>
                    );
                })
            }
            {
                tabs.map((tabname, index) => {
                    return(
                        <div className="tab-content" hidden={activeTab != tabname}> {tabname} content </div>
                    );
                })
            }
        </div>
    );
}