class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :creator
      t.text :song_data
      t.timestamps
    end
  end
end
