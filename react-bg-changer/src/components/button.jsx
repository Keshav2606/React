import React from "react";
import "../App.css";

function Button(props){
    return(
        <>
        <button className="color-btn text-white" 
        style={{backgroundColor: props.color}}
        onClick={()=>{
            document.querySelector('body').style.backgroundColor = props.color;
        }}>
            {props.color}
        </button>
        </>
    )
}

export default Button