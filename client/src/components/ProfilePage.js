import { useState, useEffect, useRef } from 'react'
import ItemCard from './ItemCard'
import NewItem from './NewItem'

const ProfilePage = ({username, setAllItems}) => {

    const [userId, setUserId] = useState(0)
    const [userItems, setUserItems] = useState([])
    const [formVisible, setFormVisible] = useState(false)
    const isMounted = useRef(false)


    useEffect(()=>{
        (async ()=>{
            let req = await fetch(`http://localhost:3000/users/${localStorage.getItem("session_user_id")}`)
            let res = await req.json()
            console.log(res)
            setUserId(res.id)
        })()
    },[username])

    useEffect(()=> {
        if(isMounted.current) {
        (async()=> {
            let req = await fetch(`http://localhost:3000/user-items/${userId}`)
            let res = await req.json()
            setUserItems(res)
        })()} else {
            isMounted.current = true
        }
    },[userId])
    
    return(
        <div className='profile-page'>
            { username &&
                userItems.map((element)=>{
                    return( <ItemCard element={element} key={element.id}/>)
                })
            }
            <button onClick={()=>{setFormVisible(true)}}>Add a new item!</button>
            {
                formVisible ? <NewItem setAllItems={setAllItems} setUserItems={setUserItems}/> : null
            }


        </div>
    )
}

export default ProfilePage;