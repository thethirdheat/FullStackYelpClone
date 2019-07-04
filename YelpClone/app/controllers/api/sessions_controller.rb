class Api::SessionsController < ApplicationController 
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )

        if @user
            sign_in(@user)
            render '../views/api/sessions/show'
        else
            render json: ["The email address or password you entered is incorrect."], status: 401
#            flash.now[:errors] = ['Invalid username or password']
#            render :new
        end
    end

    def destroy 
        @user = current_user
        if @user 
            sign_out
            render '../views/api/sessions/show'
        else
            render json: ["Nobody signed in"], status: 404
        end
    end


end

