import React, { useState } from "react";

export default function Avatar(props) {
    return(
        <div className="center-text">
            <h3>Welcome to my Fun Page</h3>
            <img className="avatar" src={require('../images/img_avatar2.png')}></img>
        </div>
    );
}