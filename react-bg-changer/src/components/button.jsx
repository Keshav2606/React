import React from "react";
import "../App.css";

function Button(props){
    return(
        <>
        <button className="text-white rounded-full" 
        style={{backgroundColor: props.color}}
        onClick={props.onclick}>
            {props.color}
        </button>
        </>
    )
}

export default Button