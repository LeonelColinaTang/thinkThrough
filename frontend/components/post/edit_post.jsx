import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import Editor from 'react-medium-editor';
// require('medium-editor/dist/css/medium-editor.css');
// require('medium-editor/dist/css/themes/mani.css');
import { createOnePost, getOnePost, updateOnePost } from "../../actions/post_actions";



const EditPostPage = ({match}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getOnePost(match.params.id))
    }, [])
    


    const user = useSelector((state) => state.entities.users[state.session.id])
    const post = useSelector((state) => state.entities.posts)
   

    const [title, setTitle] = useState(post.title);
    const [text, setText] = useState(post.body);

    const handleEditPost = () => {
        dispatch(updateOnePost({
            id: match.params.id,
            title: title,
            body: text,
            user_id: user.id,
        }))
        history.push('/profile')
    }

    return (
        <div className="create-post-container" >
            <div className="create-navbar">
                <a href="#" className="logo-create small-logo">
                    <svg viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                </a>
                <span>Draft in {user.email}</span>
                <button onClick={handleEditPost}><span>Update</span></button>
            </div>
            <div className="create-editor-container">
                <div className="post-field">
                    {/* < Editor
                        text={title}
                        onChange={(e, medium) => setTitle(medium.origElements.innerText)}
                        options={{
                            toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor'] },
                            placeholder: { title }
                        }}
                    /> */}
                </div>
                <div className="post-field">
                    {/* < Editor
                        text={text}
                        onChange={(e, medium) => setText(medium.origElements.innerText)}
                        options={{
                            toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor'] },
                            placeholder: { text }
                        }}
                    /> */}
                </div>
            </div>
        </div>
    )


};

export default EditPostPage;