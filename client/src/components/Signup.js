import { useState } from "react"

const Signup = ({ setSignUp, setLoginLink }) => {
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [signUpFormData, setSignUpFormData] = useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "username":"",
        "password":""
    })

    const handleClickOffModal = (e) => {
        e.preventDefault()
        setSignUp(prevState => !prevState)
    }
    
    const handleLoginClick = (e) => {
        e.stopPropagation();
        e.preventDefault()
        setLoginLink(prevState => !prevState)
        setSignUp(prevState => !prevState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let form = new FormData(document.querySelector("#login-form"))
        try {
            let req = await fetch('http://localhost:3000/users', {
                method: "POST",
                body: form
            })
            let res = await req.json()
            console.log(res)
            if (res.ok) {
                setSubmitSuccess(true)
            }
        } catch(error){
            alert(error.message)
        }
    }

    return(
        
        <form id="login-form" className="signup-modal" onSubmit={handleSubmit} onClick={handleClickOffModal}>
            <input onClick={(e)=>{e.stopPropagation()}} name='user[first_name]' placeholder='First Name' type='text'/>
            <input onClick={(e)=>{e.stopPropagation()}} name='user[last_name]' placeholder='Last Name' type='text'/>
            <input onClick={(e)=>{e.stopPropagation()}} name='user[email]' placeholder='Email' type='email'/>
            <input onClick={(e)=>{e.stopPropagation()}} name='user[username]' placeholder='Username' type='text'/>
            <input onClick={(e)=>{e.stopPropagation()}} name='user[password]' placeholder='Password' type='password'/>
            <input onClick={(e)=>{e.stopPropagation()}} placeholder='Confirm Password' type='password'/>
            <input onClick={(e)=>{e.stopPropagation()}} type="submit" value={"Signup!"} style={{cursor:'pointer'}}/>
            <div onClick={(e)=>{e.stopPropagation()}} onClick={handleLoginClick} className="signup" >Already have an account? <span style={{cursor:'pointer', textDecoration: "underline"}}>Login</span></div>
        </form>
        
    )
}

export default Signup;