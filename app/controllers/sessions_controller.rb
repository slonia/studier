class SessionsController < ApplicationController
  skip_before_filter :authorize
  def new
  end

  def create
    if user = User.authenticate(params[:name], params[:password])
      session[:user_id] = user.id
      redirect_to :controller => "users", :action => "show", :id => user.name
    else
      redirect_to login_url, :alert => "Invalid user/password combination"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root, :notice => "Logged out"
  end

end
