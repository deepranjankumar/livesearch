import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
const Menu=()=>{
    return(<>
        <div className="navbar">
        <NavLink activeClassName="active_class" to="/">AboutUs</NavLink>
        <NavLink activeClassName="active_class" to="/service"> Services</NavLink>
        <NavLink activeClassName="active_class" to="/search"> Search</NavLink>
        <NavLink activeClassName="active_class" to="/user">User</NavLink>
        <NavLink activeClassName="active_class" to="/contact"> ContactUs</NavLink>
      </div>
    </>)
}
export default Menu;