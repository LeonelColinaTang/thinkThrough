class LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if !@like.save
            render json: @comment.errors.full_messages, status: 422
        end

        redirect_to @like.post
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.destroy
            render json: params[:id]
        else
            render json: @like.errors.full_messages, status: 422
        end
    end


    private
    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
    
    
end
