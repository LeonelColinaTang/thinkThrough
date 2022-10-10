export const fetchLike = (id) =>(
    $.ajax({
        url:`api/likes/${id}`,
        method: 'GET',
    })
)


export const createLike = (like) =>(
    $.ajax({
        url: 'api/likes',
        method: 'POST',
        data: {like}
    })
)


export const deleteLike = (id) => (
    $.ajax({
        url:`api/likes/${id}`,
        method: `DELETE`,
        data: {id}
    })
)