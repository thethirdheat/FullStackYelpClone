class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)

        if @user.save
            sign_in(@user)
            render '../views/api/users/show'
            #render plain: 'it worked lululul'
        else
            flash.now[:errors] = @user.errors.full_messages
            render plain: 'you fucked up'
        end
    end

    private
    def user_params
        params.require(:user).permit(:password, :username,:email)
    end
end
