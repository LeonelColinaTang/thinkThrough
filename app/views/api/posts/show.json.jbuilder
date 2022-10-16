# @post.set! post.id do
    json.partial! 'api/posts/post', post: @post

    if post.photo.attached?
        json.photoUrl url_for(post.photo)
    end

    json.author @post.user.email

    json.comments do 
        @post.comments.each do |comment|
        json.set! comment.id do 
            json.partial! 'api/comments/comment', comment: comment 
            json.author comment.commenter.email
            end
        end
    end


    json.likes do 
        @post.likes.each do |like|
        json.set! like.id do 
                json.extract! like, :id, :user_id, :post_id
            end
        end
    end

# end