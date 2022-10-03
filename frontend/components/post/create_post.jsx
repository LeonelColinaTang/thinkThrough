import React, { useState } from "react";
// require('medium-editor/dist/css/medium-editor.css');
// require('medium-editor/dist/css/themes/default.css');
import Editor from 'react-medium-editor';
import { useSelector, useDispatch } from "react-redux";
import { createOnePost } from "../../actions/post_actions";
import { useHistory } from "react-router-dom";



const WritingPostPage = () =>{

    // let editorr = new MediumEditor('.something')
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.entities.users[state.session.id])
 
    const [text, setText]= useState('');
    const [title, setTitle] = useState('');

    const handleCreatePost = ()=>{

        dispatch(createOnePost({
            title: title,
            body: text,
            user_id: user.id,
        }))
        history.push('/profile')
    }

    return(
        <div className="create-post-container" >
            <div className="create-navbar">
                <a href="#" className="logo-create small-logo">
                    <svg viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                </a>
                <span>Draft in {user.email}</span>
                <button onClick={handleCreatePost}><span>Publish</span></button>
            </div>
            <div className="create-editor-container">
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} 
                    placeholder="Title"
                    className="post-field"
                />
                <textarea 
                    className="post-field" 
                    placeholder="Tell your story..." 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    rows="5"
                    cols="60"
                />
                {/* <Editor 
                text={text}
                onChange={(e)=> setText(e.target.value)}
                options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                /> */}
            </div>
        </div>
    )


};

export default WritingPostPage;