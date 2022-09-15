import React from 'react';


export const NavBar = () =>{
    return(
<ul>
        <li>
        <NavLink className ="index-link"  to="/">Index</NavLink>
        </li>
        <li>
        <NavLink className ="home-link"  to="/home">Home</NavLink>
        </li>
        
        
        </ul>
    )
}
