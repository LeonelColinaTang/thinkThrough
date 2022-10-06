json.partial! 'api/comments/comment', comment: @comment
json.author @comment.commenter.email