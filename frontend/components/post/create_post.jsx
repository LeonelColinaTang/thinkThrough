import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOnePost } from "../../actions/post_actions";
import { useHistory } from "react-router-dom";



const WritingPostPage = () =>{
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.entities.users[state.session.id])
 
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [postPic, setPostPic] = useState(null);

    const handleCreatePost = ()=>{

        const formData = new FormData();
        // debugger
        formData.append('post[title]', title);
        formData.append('post[body]', body);
        formData.append('post[user_id]', user.id);
        if (postPic){
            formData.append('post[photo]', postPic);
        }

        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        dispatch(createOnePost(formData));

        history.push('/profile')
    }

    return(
        <div className="create-post-container" >
            <div className="create-navbar">
                <a href="#" className="logo-create small-logo">
                    <svg viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                </a>
                <span>Draft in {user.email}</span>
                <button onClick={handleCreatePost}><span className="publish-button">Publish</span></button>
            </div>
            <div className="create-editor-container">
                <div className="post-field">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div className="post-field">
                    <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Tell your story..." />
                </div>
                <label className="post-image">
                    Upload an image
                    <input type="file" onChange={e => setPostPic(e.currentTarget.files[0])} />
                </label>
            </div>
        </div>
    )


};

export default WritingPostPage;