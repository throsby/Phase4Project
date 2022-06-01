const Signup = ({ setSignUp, setLoginLink }) => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("I am in fact getting here")
        setLoginLink(prevState => !prevState)
        setSignUp(prevState => !prevState)
    }

    return(
        <div onClick={handleClick}>Signup</div>
    )
}

export default Signup;