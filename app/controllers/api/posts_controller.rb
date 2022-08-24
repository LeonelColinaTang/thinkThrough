class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        if @post.save
          redirect_to @post #idk where to redirect here
        else 
          render json: @post.errors.full_messages, status: 422
        end
    end

    






    private 
     def post_params 
        params.require(:post).permit(:user_id, :title, :body, :tag, :length)
     end
    
end