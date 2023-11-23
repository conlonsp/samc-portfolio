class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :tech, :func, :yt_id, :gh_url
end
