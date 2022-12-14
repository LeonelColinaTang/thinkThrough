export const fetchAllComments = (data) =>(
    $.ajax({
        url: 'api/comments',
        method: 'GET',
        data
    })
)

export const createComment = (comment) =>(
    $.ajax({
        url: 'api/comments',
        method: 'POST',
        data: {comment}
    })
)

export const updateComment = (comment) => (
    $.ajax({
        url: `api/comments/${comment.id}`,
        method: `PATCH`,
        data: {comment}
    })
)

export const deleteComment = (id) => (
    $.ajax({
        url: `api/comments/${id}`,
        method: `DELETE`,
        data: { id }
    })
)