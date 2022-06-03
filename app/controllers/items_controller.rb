class ItemsController < ApplicationController
    def index 
        items = Item.all
        render json: items, status: 200
    end

    def show 
        item = Item.find_by(id: params[:id])
        image = rails_blob_path(item.image)
        if item
            render json: {item: item, image: image}, status: 200
        else
            render json: {error: "Item not found"}, status: 404
        end
    end

    def create
        item = Item.create(item_params)
        # (io: File.open("/Users/throsbywells/Desktop/download.jpg"), filename: "download.jpg", content_type: "image/jpeg")
        p item_params  
        p "\n"

        p "Image" 
        
        
        imageFFS = ActiveStorage::Blob::create_and_upload!(io: params[:image].tempfile, filename: params[:image].original_filename)
        p imageFFS
        item.image.attach(imageFFS)
        p "********"

        if item.valid?
            render json: item, status: 201
        else
            render json: {error: "Unprocessable Entity"}, status: 422
        end
    end

    def update
        item = Item.find_by(id: params[:id])
        if item 
            item.update(item_params)
            render json: item, status: 200
        else 
            render json: {error: "Item not found"}, status: 404
        end
    end

    def destroy
        item = Item.find_by(id: params[:id])
        if item 
            item.destroy
            render json: {message: "listing deleted!"}, status: 200
        else
            render json: {error: "item not found"}, status: 404
        end
    end

    



    private

    def item_params
        params.require(:item).permit(:name, :stock, :price, :description, :user_id, :image)
    end

end
