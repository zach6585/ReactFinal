class SheetsController < ApplicationController
    def create
        song = Sheet.create(:title => params["song"]["title"], :note_data => params["song"]["notes"])
        render json: song
    end 
end
