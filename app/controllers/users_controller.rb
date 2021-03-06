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


    # Don't touch you fuckers, Throsby you especially
    def me
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: 200
        else 
            render json: {error: "Access Denied!"}, status: 403
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

    def user_items
        items = User.find_by(id: params[:id]).items
        if items
            render json: items, status: 200
        else
            render json: {error: 'you suck'}, status: 404
        end
    end


    def create 
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: 201
        else
            render json: {error: "Unprocessable enitity"}, status: 422
        end

    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            user.destroy
            render json: {message: "Account successfully deleted"}, status: 200
        else
            render json: {error: "Access Denied!"}, status: 403
        end
    end

    

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :username)
    end
end
