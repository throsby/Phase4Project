import { useState } from "react"
import LoginForm from "./LoginForm"
import Signup from "./Signup"

const LoginLink = () => {

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

    return(
        <>
            <span style={{cursor:'pointer'}} onClick={handleClick}>LoginLinkFromComponent</span>
            {loginLink && <LoginForm setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
            {signUp && <Signup setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
        </>
    )
}

export default LoginLink;