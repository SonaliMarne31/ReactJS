import React from "react";

export default function Button(props) {

    return(
        <button
            disabled={props.disabled}
            style={{
                backgroundColor: props.color,
                height: props.height,
                width: props.width
            }}
            onClick={props.onClick}
        > {props.buttonText}
        </button>
    );

}

Button.defaultProps = {
    height: 30,
    width: 100,
    color: 'pink',
    onClick: () => {alert('Button clicked')},
    buttonText: 'Click Me',
    disabled: false
}