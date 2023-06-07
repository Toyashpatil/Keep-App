import React from "react";

function Note(props){
    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{
            return props.onChange(props.id)}}>DELETE</button>
        </div>
        );
}

export default Note;