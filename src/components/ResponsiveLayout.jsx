import React from "react";

export default function ResponsiveLayout (props) {

    return(
        <div className="responsive-flex">
            <div className="div-container">1</div>
            <div className="div-container">2</div>
        </div>
    );

}

ResponsiveLayout.defaultProps = {
    height: 30,
    width: '50%'
}