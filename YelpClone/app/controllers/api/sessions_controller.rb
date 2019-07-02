class Api::SessionsController < ApplicationController 
    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )

        if user
            sign_in(user)
            render '../views/api/sessions/show'
        else
            flash.now[:errors] = ['Invalid username or password']
            render :new
        end
    end

    def destroy 
        sign_out
        render plain: "lulul"
    end


end

