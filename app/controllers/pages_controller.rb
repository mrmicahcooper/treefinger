class PagesController < ApplicationController
  skip_before_filter :require_user, only: :home

  layout 'session', only: :home

  expose(:user) { User.new }
end
