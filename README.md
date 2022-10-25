# thinkThrough

### <a href="https://think-through.herokuapp.com/#/" target="_blank">Live Link</a>

[![thinkThrough.gif](https://s1.gifyu.com/images/thinkThrough.gif)](https://gifyu.com/image/S9PAD)

<a href="https://think-through.herokuapp.com/#/profile" target="_blank">**thinkThrough**</a> is a full-stack, comprehensive clone of the popular blogging app <a href="https://medium.com/" target="_blank">**Medium**</a> where users can join and create stories to share with everyone on the platform. Users can create an account or log into an account previously created in order to write new entries. Where they add tags and pictures. As well as leave comments and like other users' posts.



***

## Technologies Utilized
* Frontend
   * ```React``` and ```Redux``` for rendering components and managing state respectively.
   * ```HTML5``` for basic structure.
   * ```SCSS``` for styling components and elements. 
   * ```Javascript``` for dynamic updates and other basic frontend interaction.
* Backend 
   * ```Rails``` for a web application framework. 
   * ```Ruby 2.5.1``` for backend and database logic.
   * ```PostgresSQL``` for database storage.
   * ```AWS (Amazon Web Services)``` for image storage.
* Full Stack 
   * ```Heroku``` for hosting and production

***

## Major Features and Code Snippets

### Posts
[![createPostGif.gif](https://s4.gifyu.com/images/createPostGif.gif)](https://gifyu.com/image/S9eXN)

Users can create posts. They would have to add a title and a body. They also have the option to attach a photo which is stored in AWS. To handle the photo, we use `formData()` to format the object to be create it and then dispatch it with the `createOnePost()` action. The rest of the formatting is done when doing the Ajax request

```.js
const WritingPostPage = () =>{
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.entities.users[state.session.id])
 
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [postPic, setPostPic] = useState(null);

    const handleCreatePost = ()=>{

        const formData = new FormData();
        formData.append('post[title]', title);
        formData.append('post[body]', body);
        formData.append('post[user_id]', user.id);
        if (postPic){
            formData.append('post[photo]', postPic);
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
                <button onClick={handleCreatePost}><span>Publish</span></button>
            </div>
            <div className="create-editor-container">
                <div className="post-field">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div className="post-field">
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Tell your story..." />
                </div>
                <form className="post-image">
                    <input type="file" onChange={e => setPostPic(e.currentTarget.files[0])} />
                </form>
            </div>
        </div>
    )
};

export default WritingPostPage;
```
 ```.js
 export const createPost = (post)=>(
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: post,
        contentType: false,
        processData: false,
    })
)
```
***

### Likes
[![LikesGif.gif](https://s4.gifyu.com/images/LikesGif.gif)](https://gifyu.com/image/S9eXu)

Users can also like posts. Through Rails associations, we keep the `user_id` of those who have liked posts. If the current user has already liked a post,
React will render the correct icon showing that. We keep track on a post being like or unliked with a `Boolean` variable that changes every time the icon is clicked.

NOTE: On the code below, the `path` has been greatly reduce for readability and illustration purposes. To get the full `path`, please check the `post.jsx` files within the `post` folder inside the `components` folder.

```.js
let liker = Boolean(likes.filter(like => like.user_id === user).length > 0);
    
    const handleLikes = (postId) =>{
        if (!liker){
            liker = !liker;
            dispatch(addLike({post_id: postId}))

        }else{
            liker = !liker;
            dispatch(unLike(postId))
        }
    }
return(
  <div className="post-likes-button" onClick={e=>handleLikes(post.id)}>

      {!liker ? <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92">
          </path>
        </svg> : <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42">
            </path>
        </svg>}         
    <p>{likes.length}</p>
  </div>
)
```
***

### Comments

[![commentsGif.gif](https://s4.gifyu.com/images/commentsGif.gif)](https://gifyu.com/image/S9ee8)

Users will also be able to comment on other users' posts or on their own. They can also edit or delete a comment. Most of the logic is inside the `Comments` component which displays the right sidebar that opens when you click the comments icon. There you will have the field to create or update a comment, and the comments displayed. Another component that was important here was the `CommentOptions`. We had to create a different component for this for two main reasons. The first one was that the code as is was starting to get too long and second, and most important one, each comment needed a local `state` to open or close the menu. Had that been done at this level, all comments would have shared the same state.

```.js
const Comments = ({post, setComments}) =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.id)
    const allComments = useSelector((state)=> Object.values(state.entities.comments));

    const [body, setBody] = useState('');
    const [buttonType, setButtonType] = useState('Respond');
    const [commentId, setCommentId] = useState(null);

    const handleCreateComment = () => {

        if (buttonType ==='Respond'){
            dispatch(createOneComment({
                body: body,
                user_id: user,
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
```

```.js
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
```
***

### Acknowledgments
I would like to acknowledge that this project wouldn't have been finished without the invaluable help of the following:

* Kenny Lozeau for helping troubleshoot so many bugs and closing knowledge gaps.
* AppAcademy for teaching me so much in such a short period of time.
* All images used were from Google and Medium and used for educational purposes.
* All images from Medium have their source on the post.

***

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
