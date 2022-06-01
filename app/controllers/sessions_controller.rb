class SessionsController < ApplicationController
    def click
        session[:click] ||= 0
        session[:click] += 1
    end

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.index
        render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
    end 

end
