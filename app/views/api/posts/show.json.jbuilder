# @post.set! post.id do
    json.partial! 'api/posts/post', post: @post
    json.author @post.user.email
# end