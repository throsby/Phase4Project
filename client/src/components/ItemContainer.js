import { useState } from 'react'
import ItemCard from './ItemCard'

const ItemContainer = () => {

    const [allItems, setAllItems] = useState([])

    const getItems = async () => {
        let req = await fetch('http://localhost:3000/items')
        let res = await req.json()
        setAllItems(res)
    }

    return (
        <div>
            {
                allItems.map((element)=>{
                    return( <ItemCard element={element} key={element.id} />)
                })
            }
        </div>
    )
}

export default ItemContainer;