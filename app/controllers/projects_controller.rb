class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :projs_not_found
  
  def index
    render json: Project.all, status: :ok
  end

  def show
    proj = Project.find(params[:id])
    render json: proj, status: :ok
  end

  private

  def projs_not_found
    render json: { errors: ['Project not found'] }, status: :not_found
  end
end
