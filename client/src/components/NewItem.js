import { useState } from 'react'

const NewItem = ({setAllItems, setUserItems}) => {

    
    const [formData, setFormData] = useState({
        name: '',
        stock: 0,
        price: 0.0,
        description: null,
        image: '',
        user_id: localStorage.getItem('session_user_id')
    })

    const handleSubmit = async (e) => {
        console.log(e.target[0].value)
        console.log(e.target[4].files[0])
        console.log(formData)
        let wholeForm = new FormData(document.querySelector("form"))

        // setFormData((prevState) => {[...prevState, "name": e.target[0].value]})
        wholeForm.set("stock", e.target[1].value)
        wholeForm.set("price", e.target[2].value)
        wholeForm.set("description", e.target[3].value)
        // wholeForm.append("image", e.target[2].value)
        console.log(wholeForm)
        wholeForm.append("image",e.target[4].files[0])
        console.log(wholeForm)
        try {
            e.preventDefault()
            // let user_id = localStorage.getItem("session_user_id")
            let req = await fetch('http://localhost:3000/items', {
                method: "POST",
                // headers: {'Content-Type': 'application/json'},
                headers: {'Content-Type': 'multipart/form-data' },
                // body: JSON.stringify(formData)
                body: wholeForm
            })
            // if (req.ok){
                let res = await req.json()
                setAllItems(prevState=> [...prevState, res])
                setUserItems(prevState=> [...prevState, res])
            // }
            // else {
            //     alert('Server down')
            // }
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <div>
            <form className='newItemForm' onSubmit={handleSubmit}>
                <input name='item[name]' placeholder='Item Name' type='text' />
                <input name='item[stock]' placeholder='Stock' type='integer' />
                <input name='item[price]' placeholder='Price' type='float' />
                <input name='item[description]' placeholder='Item Description' type='text' />
                <input name='item[image]' placeholder='Image' type='file' />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewItem;