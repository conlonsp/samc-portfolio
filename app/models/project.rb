class Project < ApplicationRecord
  validates :name, :tech, :func, :yt_id, :gh_url presence: true
end
