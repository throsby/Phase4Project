import { useState } from "react"
import LoginForm from "./LoginForm"

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
            {loginLink && <LoginForm setLoginLink={setLoginLink}/>}
            {signUp && <Signup setSignUp={setSignUp}/>}
        </div>
    )
}

export default LoginLink;