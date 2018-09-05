import React from 'react';
import {NavLink} from 'react-router-dom';
import { Sticky } from 'react-sticky';
const Menu = () => (
    <Sticky topOffset={150}>{({ style }) => 
    <div  style={style} className="menu-shadow">
        <div className="container">
            <div className="menu">
                <NavLink to="/locations" activeClassName="active-page" className="menu__link">Locations</NavLink>
                <NavLink to="/services" activeClassName="active-page" className="menu__link">Services</NavLink>
                <NavLink to="/reservations" activeClassName="active-page" className="menu__link">Reservations</NavLink>
                <NavLink to="/memberships" activeClassName="active-page" className="menu__link">Memberships</NavLink>
                <NavLink to="/calendar" activeClassName="active-page" className="menu__link">Event Calendar</NavLink>
            </div>
        </div>
    </div>
}</Sticky>
);

export default Menu;