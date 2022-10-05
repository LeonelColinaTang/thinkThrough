import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Comments = ({post}) =>{

    console.log("POSTR INSIDE COMNMENT", post)



    const handleCreateComment = () => {
        
    }

    return(
        <div className="comments-side">
            <h3>Response(s)</h3>
            <textarea rows="4" cols="40" />
            <button>Comment</button>
        </div>
    )

}


export default Comments;
