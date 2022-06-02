import { useState, useEffect, useRef } from 'react'
import ItemCard from './ItemCard'

const ProfilePage = ({username}) => {

    const [userId, setUserId] = useState(0)
    const [userItems, setUserItems] = useState([])
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


        </div>
    )
}

export default ProfilePage;