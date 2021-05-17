class CreateSheets < ActiveRecord::Migration[6.1]
  def change
    create_table :sheets do |t|
      t.string :name
      t.integer :user_id 
      t.text :note_data
      t.timestamps  
    end
  end
end
