import LoginLink from "./LoginLink"
import { useState,useEffect } from "react";


const NavBar = ({username, setUsername}) => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    
    const isSticky = () => {
        const header = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    
    return(
        <div className="navbar">
            <LoginLink username={username} setUsername={setUsername}/>
        </div>
    )
}

export default NavBar