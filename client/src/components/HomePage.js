import ProfileCircle from "./ProfileCircle";
import ProfilePanel from "./ProfilePanel";
import Watchlist from "./Watchlist";
import { useState } from "react"
import ShoppingCart from "./ShoppingCart";
import Browse from "./Browse";

const HomePage = () => {
    const [potato, setPotato] = useState("tomato")

    return(
        <ProfilePanel >
            <ProfileCircle potato={potato} />
            <Watchlist />
            <ShoppingCart />
            <Browse />
        </ProfilePanel>
    )
}

export default HomePage;