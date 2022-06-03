import ProfileCircle from "./ProfileCircle";
import ProfilePanel from "./ProfilePanel";
import Watchlist from "./Watchlist";

import ShoppingCart from "./ShoppingCart";
import Browse from "./Browse";
import ItemContainer from "./ItemContainer";

const HomePage = ({allItems, setAllItems}) => {

    return(
        <ProfilePanel >
            <ProfileCircle />
            <div className="lists-container">
                <ShoppingCart />
                <Watchlist />
            </div>
            <Browse />
            <ItemContainer allItems={allItems} setAllItems={setAllItems}/>
        </ProfilePanel>
    )
}

export default HomePage;