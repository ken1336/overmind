import React, { Component,Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const HomeMenu = () => {
    return (
        <div>
            <NavLink exact to="/" className="" activeClassName="/">홈</NavLink><br></br>
            <NavLink exact to="/home2" className="" activeClassName="hoem2">홈2</NavLink>
            
        </div>
    );
};

export default HomeMenu;