import { useEffect, useState } from "react"
import LoginForm from "./LoginForm"
import Signup from "./Signup"

const LoginLink = ({states}) => {

    const [ user, setUser ] = useState(null)
    const [ loginLink, setLoginLink ] = [...states]
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
        (async ()=> {
            let req = await fetch(`http://localhost:3000/me/${localStorage.getItem("session_user_id")}`)
            let res = await req.json()
            setUser(res.username)
        })()
    },[loginLink])

    const handleLogout = async () => {
        await fetch('http://localhost:3000/logout', {
            method: "DELETE"
            })
        setUser(null)
        localStorage.clear()
    }

    return(
        <>
            {user ? <div>Welcome <span style={{cursor:'pointer', textDecoration: "underline"}}>{user}</span> <span style={{cursor:'pointer', textDecoration: "underline"}} onClick={handleLogout}>Logout</span>
                        </div>
                    : <div>Welcome, Guest!
                            <span style={{cursor:'pointer', textDecoration: "underline"}} onClick={handleClick}>Login here!</span>  <br/>
                            <span style={{cursor:'pointer', textDecoration: "underline"}} >New? Sign up</span>
                      </div> }
            {loginLink && <LoginForm setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
            {signUp && <Signup setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
        </>
    )
}

export default LoginLink;