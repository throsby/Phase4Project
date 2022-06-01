import { useState } from 'react'

const NewItem = () => {

    const [formData, setFormData] = useState({
        name: '',
        stock: 0,
        price: 0.0,
        description: ''
    })

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let req = await fetch('http://localhost:3000/items', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            if (req.ok){
                let res = await req.json()
                setAllItems(prevState=> [...prevState, res])
            }
            else {
                alert('Server down')
            }
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <div>
            <form>
                <input name='name' placeholder='Item Name' type='text' onChange={(e) => {setFormData({...formData, name:e.target.value})}}/>
                <input name='name' placeholder='Stock' type='integer' onChange={(e) => {setFormData({...formData, stock:e.target.value})}}/>
                <input name='name' placeholder='Price' type='float' onChange={(e) => {setFormData({...formData, price:e.target.value})}}/>
                <input name='name' placeholder='Item Description' type='text' onChange={(e) => {setFormData({...formData, description:e.target.value})}}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewItem;