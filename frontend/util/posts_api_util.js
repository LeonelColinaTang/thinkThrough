export const fetchAllPosts = (data)=>(
    $.ajax({
        url: 'api/posts',
        method: 'GET',
        data
    })
)

export const fetchOnePost = (id) =>(
    $.ajax({
        url: `api/posts/${id}`,
        method: 'GET',
        data: {id}
    })
)

export const createPost = (post)=>(
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: {post}
    })
)

export const updatePost = (id) =>(
    $.ajax({
        url: `api/posts/${id}`,
        method: `PATCH`
    })
)

export const deletePost = (id) =>( 
    $.ajax({
        url: `api/posts/${id}`,
        method: `DELETE`,
        data: {id}
    })
)