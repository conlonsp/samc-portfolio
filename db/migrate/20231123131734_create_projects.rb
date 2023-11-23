class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :tech
      t.text :func
      t.string :yt_id
      t.string :gh_url

      t.timestamps
    end
  end
end
