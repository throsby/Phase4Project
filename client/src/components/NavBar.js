import LoginLink from "./LoginLink"
import { useState } from "react"

const NavBar = () => {

    const [ loginLink, setLoginLink ] = useState(false)

    return(
        <div>
            <LoginLink states={[loginLink, setLoginLink]}/>
        </div>
    )
}

export default NavBar