import LoginLink from "./LoginLink"
import { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom'


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
                <div className='home-nav'>
                    <NavLink to='/' exact>HomePage</NavLink>
                </div>
                <div className='profile-nav'>
                    <NavLink to='/profile-page' exact>Profile</NavLink>
                </div>
                <div className='store-nav'>
                    <NavLink to='/store' exact>Store</NavLink>
                </div>
                <div className='cart-nav'>
                    <NavLink to='/cart' exact>Cart</NavLink>
                </div>
        </div>
    )
}

export default NavBar