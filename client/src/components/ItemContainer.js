import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const ItemContainer = () => {

    const [allItems, setAllItems] = useState([])
    const [updatedItem, setUpdatedItem] = useState([])


    useEffect(() => {
        (async () => {
            let req = await fetch('http://localhost:3000/items') 
            let res = await req.json()
            
            setAllItems(res)
        })()
    },[updatedItem])


    return (
        <div className='item-container'>
            {
                allItems.map((element)=>{
                    return( <ItemCard setUpdatedItem={setUpdatedItem} allItems={allItems} setAllItems={setAllItems} element={element} key={element.id} />)
                })
            }
        </div>
    )
}

export default ItemContainer;