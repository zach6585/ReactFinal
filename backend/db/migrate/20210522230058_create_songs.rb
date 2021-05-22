class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :creator
      t.string :currnotes
      t.text :music
      t.timestamps
    end
  end
end
