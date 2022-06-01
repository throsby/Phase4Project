import { useState } from "react"

const LoginForm = ({setLoginLink, setSignUp }) => {

    const [loginFormData, setLoginFormData] = useState({
        'username':"",
        'password':""
    })

    const handleClick = (e) => {
        e.preventDefault();
        setLoginLink(prevState => !prevState)
    }

    const handleSignUpClick = (e) => {
        e.stopPropagation();
        e.preventDefault()
        setLoginLink(prevState => !prevState)
        setSignUp(prevState => !prevState)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let req = await fetch('http://localhost:3000/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(loginFormData)
            })
            let res = await req.json()
            console.log(res)
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <div onClick={handleClick} className="login-modal">
            <input onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Username' type='text' onChange={(e) => {setLoginFormData({...loginFormData, username: e.target.value})}}/>
            <input onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Password' type='password' onChange={(e) => {setLoginFormData({...loginFormData, password: e.target.value})}}/>
            <button onClick={handleSubmit} style={{cursor:'pointer'}}>Login</button>
            <div onClick={handleSignUpClick} className="signup" >Don't have an account? <span style={{cursor:'pointer', textDecoration: "underline"}}>Sign up</span></div>
        </div>
    )
}

export default LoginForm;