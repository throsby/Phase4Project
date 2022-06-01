import { useState } from "react"

const Signup = ({ setSignUp, setLoginLink }) => {

    const [signUpFormData, setSignUpFormData] = useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "username":"",
        "password":""
    })

    const handleClick = (e) => {
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
        
        try {
            e.preventDefault()
            let req = await fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(signUpFormData)
            })
            let res = await req.json()
            console.log(res)
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <form className="signup-modal" onClick={handleClick}>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='First Name' type='text' onChange={(e) => {setSignUpFormData({...signUpFormData, first_name: e.target.value})}}/>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Last Name' type='text' onChange={(e) => {setSignUpFormData({...signUpFormData, last_name: e.target.value})}}/>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Email' type='email' onChange={(e) => {setSignUpFormData({...signUpFormData, email: e.target.value})}}/>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Username' type='text' onChange={(e) => {setSignUpFormData({...signUpFormData, username: e.target.value})}}/>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Password' type='password' onChange={(e) => {setSignUpFormData({...signUpFormData, password: e.target.value})}}/>
            <input required onClick={(e)=>{e.stopPropagation()}} name='name' placeholder='Confirm Password' type='password'/>
            <input onClick={handleSubmit} type="submit" value={"Submit"} style={{cursor:'pointer'}}/>
            <div onClick={handleLoginClick} className="signup" >Already have an account? <span style={{cursor:'pointer', textDecoration: "underline"}}>Login</span></div>
        </form>
    )
}

export default Signup;