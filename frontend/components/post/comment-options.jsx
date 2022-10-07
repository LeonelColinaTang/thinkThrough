import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOneComment } from "../../actions/comment_actions";
import { updateComment } from "../../util/comments_api_util";
 
const CommentOptions = ({comment, setButtonType, setBody, setCommentId}) =>{
    const dispatch = useDispatch();

    window.updateComment = updateComment;

    const [options, setOptions] = useState(false)


    const handleDelete = () =>{
        dispatch(deleteOneComment(comment.id))
    }

    const handleEdit = () => {
        setOptions(!options);
        setButtonType('Update');
        setBody(comment.body)
        setCommentId(comment.id)
    }

    return(
        <div className="comment-options">
            <svg onClick={e => setOptions(!options)} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000">
                </path>
            </svg>

            {options && <div className="delete-options">
                <div className="edit-option" onClick={handleEdit}>
                    <p>Edit this response</p>
                </div>
                <div className="delete-option" onClick={handleDelete}>
                    <p>Delete</p>
                </div>
            </div>}

        </div>
    )

    



}

export default CommentOptions;