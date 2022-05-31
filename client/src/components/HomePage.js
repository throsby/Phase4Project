import ProfileCircle from "./ProfileCircle";
import ProfilePanel from "./ProfilePanel";
import Watchlist from "./Watchlist";
import { useState } from "react"
import ShoppingCart from "./ShoppingCart";
import Browse from "./Browse";
import ItemContainer from "./ItemContainer";

const HomePage = () => {
    const [potato, setPotato] = useState("tomato")

    return(
        <ProfilePanel >
            <ProfileCircle potato={potato} />
            <Watchlist />
            <ShoppingCart />
            <Browse />
            <ItemContainer />
        </ProfilePanel>
    )
}

export default HomePage;