import { useState } from 'react'


const ItemCard = ({element, allItems, setAllItems, setUpdatedItem}) => {

    const {name, stock, price, description, id} = element
    const [deleteBtnVisible, setDeleteBtnVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: name,
        stock: stock,
        price: price,
        description: description
    })

    const toggleVisible = () => {
        setEditModalVisible(!editModalVisible)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        let req = await fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE"
        })
        setAllItems((prevState) => {
            if (req.ok){
                let arr = prevState.filter((element)=>{
                    return(element.id !== id)
                })
                return arr
            }
        })
    }

    const handleUpdate = async (e) => {
        try {
            e.preventDefault()
            let req = await fetch(`http://localhost:3000/items/${element.id}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            if (req.ok){
                let res = await req.json()
                setUpdatedItem(res)
                toggleVisible()
                
            }
            else {
                alert('Server down')
            }
        } catch(error){
            alert(error.message)
        }
    }

    let deleteMsg = deleteBtnVisible ? "No, take me back!" : "Delete this item"

    return (
        <div className="item-card">
            <h2>{name}</h2>
            <h4>Stock: {stock}</h4>
            <h4>Price: {price}</h4>
            <p>Description: <br/>{description}</p>
            {
                editModalVisible ? 
                    <div>
                        <form>
                            <input name='name' placeholder='Item Name' type='text' onChange={(e) => {setFormData({...formData, name:e.target.value})}}/>
                            <input name='name' placeholder='Stock' type='integer' onChange={(e) => {setFormData({...formData, stock:e.target.value})}}/>
                            <input name='name' placeholder='Price' type='float' onChange={(e) => {setFormData({...formData, price:e.target.value})}}/>
                            <input name='name' placeholder='Item Description' type='text' onChange={(e) => {setFormData({...formData, description:e.target.value})}}/>
                            <input type='submit' onClick={handleUpdate}/>
                        </form>
                    </div> : <button onClick={toggleVisible}>Edit Item</button>
            }
            <button onClick={()=>{setDeleteBtnVisible(!deleteBtnVisible)}}>{deleteMsg}</button>

            {
                deleteBtnVisible ?
                <button onClick={handleDelete}>Delete</button>  : null
            }

            {/* {
                deleteBtnVisible ? <button onClick={handleDelete}>Delete</button> <button onClick={()=>setDeleteBtnVisible(false)}>No, take me back</button> : <button onClick={()=>setDeleteBtnVisible(true)}>Delete this item</button>
            } */}
        </div>
    )
}

export default ItemCard;