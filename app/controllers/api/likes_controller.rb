class Api::LikesController < ApplicationController

    def create
        @like = current_user.likes.new(like_params)
        # debugger
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

    def destroy
        @like = Like.find_by(post_id: params[:id])
        debugger
        if @like && current_user.id === @like.user_id
            render json: params[:id] if @like.destroy
        else
            render json: @like.errors.full_messages, status: 422
        end
    end


    private
    def like_params
        params.require(:like).permit(:post_id)
    end
    
    
end
