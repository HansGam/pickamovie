import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <div className="Header">
            <div className="info-links">
                <div>
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/about">About</NavLink>
                </div>
            </div>
        </div>
    )
}