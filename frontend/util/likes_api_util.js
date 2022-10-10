export const createLike = (like) =>(
    $.ajax({
        url: 'api/likes',
        method: 'POST',
        like
    })
)