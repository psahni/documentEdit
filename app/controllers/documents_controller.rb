class DocumentsController < ApplicationController
  
  respond_to :json
  
  def index
    respond_with Document.all
  end

  def show
    respond_with Document.find(params[:id])
  end
  
  def create
    document = Document.create(params[:document])
    respond_with document
  end
  
  
  def update
    document = Document.find(params[:id])
    document.update_attributes! params[:document]
    respond_with document
  end
  
  def edit
  end

  def new
  end
  
end
