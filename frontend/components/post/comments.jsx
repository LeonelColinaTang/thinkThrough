import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOneComment } from "../../actions/comment_actions";

const Comments = ({post, setComments}) =>{

    console.log("POSTR INSIDE COMNMENT", post)

    const dispatch = useDispatch();

    const allComments = useSelector((state)=> Object.values(state.entities.comments))
    console.log(allComments)
    const [body, setBody] = useState('');



    const handleCreateComment = () => {
        dispatch(createOneComment({
            body: body,
            user_id: post.user_id,
            post_id: post.id,
        }))
    }

    return(
        <>
            <div className="comments-side" onClick={e => e.stopPropagation()}>
                <div className="response-div">
                    <div className="response-title">
                        <h2>Responses ({allComments.length})</h2>
                    </div>
                    <div className="close-responses" onClick={e=>setComments(false)}>
                        <svg width="25" height="25" viewBox="0 0 25 25" className="de">
                            <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="create-comment-section">
                    <div className="comment-box">
                            <textarea 
                                rows="4" 
                                cols="40" 
                                value={body} 
                                onChange={e=> setBody(e.target.value)}
                                placeholder="What are your thoughts?"
                            />
                            <button onClick={handleCreateComment}>Comment</button>
                    </div>
                </div>
                <div className="comments-list">
                    {allComments.map(comment =>(
                        <div className="comment-div">
                            <div className="comment-header">
                                <div className="comment-name-pic">
                                    <div className="comment-pic">
                                        <img src={window.kyle} />
                                    </div>
                                    <div className="comment-name">
                                        <p>{comment.author}</p>
                                    </div>
                                </div>
                                <div className="comment-options">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="comment-body">
                                <p>{comment.body}</p>
                            </div>
                            <div className="comment-footer">
                                <div className="footer-likes-comments">
                                    <div className="footer-likes">

                                    </div>
                                    <div className="footer-comments">

                                    </div>
                                </div>
                                <div className="footer-reply">

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}


export default Comments;
