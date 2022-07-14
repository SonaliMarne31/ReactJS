import React from "react";

export default function PhotoList(props) {

    return(
        <div>
            Photo App
            <div className="photo-app">
                <img src={require('../images/img_avatar2.png')}></img>
                <img src={require('../images/img_avatar2.png')}></img>
                <img src={require('../images/img_avatar2.png')}></img>
                <img src={require('../images/img_avatar2.png')}></img>
                <img src={require('../images/img_avatar2.png')}></img>
                <img src={require('../images/img_avatar2.png')}></img>
            </div>
            
        </div>
    );
}