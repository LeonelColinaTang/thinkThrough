json.array! @comments do |comment|
    json.partial! 'api/comments/comment', comment: comment 
    json.author post.commenter.email
end