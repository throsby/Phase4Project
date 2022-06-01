class TagsController < ApplicationController
    def index
        tags = Tag.all
        render json: tags, status: 200
    end

    def show
        tag = Tag.find_by(id: params[:id])
        if tag
            render json: tag, status: 200
        else
            render json: {error: "Tag not found"}, status: 404
        end
    end
end
