import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOneComment, updateOneComment } from "../../actions/comment_actions";
import CommentOptions from "./comment-options";

const Comments = ({post, setComments}) =>{

    const dispatch = useDispatch();

    const allComments = useSelector((state)=> Object.values(state.entities.comments));

    const [body, setBody] = useState('');
    const [buttonType, setButtonType] = useState('Respond');
    const [commentId, setCommentId] = useState(null);


    const handleCreateComment = () => {

        if (buttonType ==='Respond'){
            dispatch(createOneComment({
                body: body,
                user_id: post.user_id,
                post_id: post.id,
            }));
            setBody('');
        }

        if (buttonType === 'Update'){
            dispatch(updateOneComment({
                id: commentId,
                body: body,
                user_id: post.user_id,
                post_id: post.id,
            }));
            setBody('');
            setButtonType('Respond');
        }
        
    };


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
                            <button onClick={handleCreateComment}>{buttonType}</button>
                    </div>
                </div>
                <div className="comments-list">
                    {allComments.map(comment =>(
                        <div className="comment-div" key={comment.id}>
                            <div className="comment-header">
                                <div className="comment-name-pic">
                                    <div className="comment-pic">
                                        <img src={window.kyle} />
                                    </div>
                                    <div className="comment-name">
                                        <p>{comment.author}</p>
                                    </div>
                                </div>
                                <CommentOptions 
                                    comment={comment} 
                                    setButtonType={setButtonType}
                                    setBody={setBody}
                                    setCommentId={setCommentId}
                                />
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
