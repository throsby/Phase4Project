import { useEffect, useState } from "react"
import LoginForm from "./LoginForm"
import Signup from "./Signup"

const LoginLink = ({username, setUsername}) => {

    const [ loginLink, setLoginLink ] = useState(false)
    const [ signUp, setSignUp ] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault()
        setLoginLink(!loginLink)
        if (signUp && !loginLink){
            setSignUp(false)
            setLoginLink(false)
        }
    }

    useEffect(()=> {
        if (localStorage.length > 0){
        (async ()=> {
            let req = await fetch(`http://localhost:3000/me/${localStorage.getItem("session_user_id")}`)
            let res = await req.json()
            setUsername(res.username)
        })()}
    },[])

    const handleLogout = async () => {
        await fetch('http://localhost:3000/logout', {
            method: "DELETE"
            })
        setUsername("")
        localStorage.clear()
    }

    // if (localStorage.getItem(""))

    return(
        <>
            {username ? <>Welcome <span style={{cursor:'pointer', textDecoration: "underline"}}>{username}</span> <span style={{cursor:'pointer', textDecoration: "underline"}} onClick={handleLogout}>Logout</span></>
                :
                    <div>Welcome, Guest!
                            <span style={{cursor:'pointer', textDecoration: "underline"}} onClick={handleClick}>Login here!</span> <br/>
                            <span style={{cursor:'pointer', textDecoration: "underline"}} >New? Sign up</span>
                    </div>}
            {loginLink && <LoginForm setSignUp={setSignUp} setLoginLink={setLoginLink} setUsername={setUsername}/>}
            {signUp && <Signup setSignUp={setSignUp} setLoginLink={setLoginLink} setUsername={setUsername}/>}
        </>
    )
}

export default LoginLink;