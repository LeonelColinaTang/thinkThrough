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

export const updateComment = (id) => (
    $.ajax({
        url: `api/comments/${id}`,
        method: `PATCH`
    })
)

export const deleteComment = (id) => (
    $.ajax({
        url: `api/comments/${id}`,
        method: `DELETE`,
        data: { id }
    })
)