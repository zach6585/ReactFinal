class CreateSheets < ActiveRecord::Migration[6.1]
  def change
    create_table :sheets do |t|
      t.string :title
      t.text :note_data
      t.timestamps  
    end
  end
end
