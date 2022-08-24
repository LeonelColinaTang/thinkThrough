class ModifyPostTable < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :tag, :string
    add_column :posts, :length, :string      
  end
end
