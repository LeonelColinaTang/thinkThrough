# @post.set! post.id do
    json.partial! 'api/posts/post', post: @post



    json.author @post.user.email

    json.comments do 
        @post.comments.each do |comment|
        json.set! comment.id do 
            json.partial! 'api/comments/comment', comment: comment 
            json.author comment.commenter.email
            end
        end
    end

# end