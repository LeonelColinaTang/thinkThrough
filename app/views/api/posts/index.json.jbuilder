@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post 
        json.author post.user.email

        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
        # json.extract! post, :id, :title, :body, :tag, :length, :created_at

    end
end