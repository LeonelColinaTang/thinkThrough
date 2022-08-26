# json.array! @posts do |post|
#     json.partial! 'api/posts/post', post: post 
#     json.author post.user.email
# end

@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post 
        # json.extract! post, :id, :title, :body, :tag, :length, :created_at

    end


end