class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all.includes(:commenter)
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
          render :show
        else 
          render json: @comment.errors.full_messages, status: 422
        end
    end

     def update 
      # debugger
        @comment = Comment.find(params[:id])
        if @comment && current_user.id == @comment.user_id 
           render :show if @comment.update(comment_params)
        else
          render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        # debugger
        if @comment.destroy
            render json: params[:id]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    

    private 
     def comment_params 
        params.require(:comment).permit(:user_id, :body, :post_id)
     end
    
end
