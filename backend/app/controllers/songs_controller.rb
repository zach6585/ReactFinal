class SongsController < ApplicationController
    def index 
        songs = Song.all
        render json: songs
    end 

    def create 
        songs = Song.all
        Song.create(:title => params[:title], :creator => params[:creator], :song_data => params[:song_data])
    end 

end
