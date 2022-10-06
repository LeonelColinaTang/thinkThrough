# json.array! @comments do |comment|
#     json.partial! 'api/comments/comment', comment: comment 
#     json.author comment.commenter.email
# end

@comments.each do |comment|
    json.set! comment.id do 
        json.partial! 'api/comments/comment', comment: comment 
        json.author comment.commenter.email
    end
end