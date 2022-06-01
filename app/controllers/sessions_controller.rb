class SessionsController < ApplicationController
    def click
        session[:click] ||= 0
        session[:click] += 1
    end

    def create
        user = User.find_by(username: params[:username])
        if user&.authenitcate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: 201
        else 
            render json: {error: "Invalid username or password"}, status: 401
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end 

end
