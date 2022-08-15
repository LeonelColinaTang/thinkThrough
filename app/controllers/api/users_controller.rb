class Api::UsersController < ApplicationController
      before_action :require_logged_in, only: [:index, :show]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
          login(@user)
          redirect_to users_url(@user)
        else
        #   flash[:errors] = @user.errors.full_messages
        #   render :new
        render json: @user.errors.full_messages, status: 404
        end
    end

    def show
        @user = User.find(params[:id])
        render :show 
    end


    def index
        @users = User.all
        render :index
    end
    
    

    private 
    def user_params 
        params.require(:user).permit(:email, :password)
    end

end
