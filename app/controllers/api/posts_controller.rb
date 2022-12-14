class Api::PostsController < ApplicationController

    def index
        @posts = Post.all.includes(:user)
        render :index
    end
    

    def show
        @post = Post.find(params[:id].to_i)
        render :show 
    end

    def create
        @post = Post.new(post_params)
        if @post.save
          render :show
        else 
          render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        # debugger
        if @post && current_user.id == @post.user_id 
           render :show if @post.update(post_params)
        else
          render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.destroy
            render json: params[:id]
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    

    private 
     def post_params 
        # debugger
        params.require(:post).permit(:user_id, :title, :body, :tag, :length, :photo)
     end
    
end