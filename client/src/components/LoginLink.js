import { useState } from "react"
import LoginForm from "./LoginForm"
import Signup from "./Signup"

const LoginLink = () => {

    const [ loginLink, setLoginLink ] = useState(false)
    const [ signUp, setSignUp ] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setLoginLink(!loginLink)
    }


    return(
        <div>
            <p onClick={handleClick}>LoginLinkFromComponent</p>
            {loginLink && <LoginForm setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
            {signUp && <Signup setSignUp={setSignUp} setLoginLink={setLoginLink}/>}
        </div>
    )
}

export default LoginLink;