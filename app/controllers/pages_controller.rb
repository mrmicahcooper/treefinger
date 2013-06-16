class PagesController < ApplicationController
  layout 'session', only: :home

  expose(:user) { User.new }

end
