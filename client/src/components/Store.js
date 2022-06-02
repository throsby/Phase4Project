import StorePage from "./StoreComponents/StorePage";
import StoreHeader from "./StoreComponents/StoreHeader";
import StoreScroll from "./StoreComponents/StoreScroll";
import StoreItems from "./StoreComponents/StoreItems"
import AddItemButton from "./StoreComponents/AddItemButton"
import Dashboard from "./StoreComponents/Dashboard"
import { useState } from "react";
import BottomForm from "./StoreComponents/BottomForm";

const Store = () => {

    const [ modalVisible, setModalVisible] = useState(false)

    return(

        <StorePage >
            <StoreHeader modalVisible={modalVisible}>
                {!modalVisible && <AddItemButton setModalVisible={setModalVisible}/>}
                {modalVisible && <BottomForm setModalVisible={setModalVisible}/>}
                {!modalVisible && <Dashboard />}
            </StoreHeader>

            {!modalVisible && <StoreScroll>
                <StoreItems />
            </StoreScroll>}
        </StorePage>
    )
}

export default Store;