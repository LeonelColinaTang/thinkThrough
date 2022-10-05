@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post 
        json.author post.user.email
        # json.extract! post, :id, :title, :body, :tag, :length, :created_at

    end
end