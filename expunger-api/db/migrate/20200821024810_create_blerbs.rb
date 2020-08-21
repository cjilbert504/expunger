class CreateBlerbs < ActiveRecord::Migration[6.0]
  def change
    create_table :blerbs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
