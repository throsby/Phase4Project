class ItemsController < ApplicationController
    def index 
        items = Item.all.order(id: :ASC)
        render json: items, status: 200
    end

    def show 
        item = Item.find_by(id: params[:id])
        if item
            render json: item, status: 200
        else
            render json: {error: "Item not found"}, status: 404
        end
    end

    def create
        item = Item.create(item_params)
        if item.valid?
            render json: item
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
        params.require(:item).permit(:name, :stock, :price, :description, :user_id)
    end

end
