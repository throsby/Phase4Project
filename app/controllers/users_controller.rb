class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        if user
        render json: user, status: 200
        else
            render json: {error: 'User not found'}, status: 404
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: {error: 'User not found'}, status: 404
        end 
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password_digest)
    end
end
