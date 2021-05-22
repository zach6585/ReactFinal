class SongsController < ApplicationController
    def index 
        songs = Song.all
        render json: songs
    end 

    def create 
        songs = Song.all
        Song.create(:title => params[:title], :creator => params[:creator], :currnotes => params[:currnotes], :music => params[:music])
    end 
end
