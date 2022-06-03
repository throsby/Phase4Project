import { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const ItemContainer = ({allItems, setAllItems}) => {



    useEffect(() => {
        (async () => {
            let req = await fetch('http://localhost:3000/items') 
            let res = await req.json()
            
            setAllItems(res)
        })()
    },[])


    return (
        <div className='item-container'>
            {
                allItems.map((element)=>{
                    return( <ItemCard element={element} key={element.id} />)
                })
            }
        </div>
    )
}

export default ItemContainer;