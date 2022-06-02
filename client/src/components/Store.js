import StorePage from "./StoreComponents/StorePage";
import StoreHeader from "./StoreComponents/StoreHeader";
import StoreScroll from "./StoreComponents/StoreScroll";
import StoreItems from "./StoreComponents/StoreItems"
import AddItemButton from "./StoreComponents/AddItemButton"
import Dashboard from "./StoreComponents/Dashboard"

const Store = () => {

    return(

        <StorePage >
            <StoreHeader>
                <AddItemButton />
                <Dashboard />
            </StoreHeader>

            <StoreScroll>
                <StoreItems />
            </StoreScroll>
        </StorePage>
    )
}

export default Store;