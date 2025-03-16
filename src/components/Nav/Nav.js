import React from 'react';
import './Nav.css';

export default function Nav()
{
    return(
        <nav className="nav">
            <ul className="nav-list">
                <li><a href="/"> Home </a></li>
                <li><a href="/menu"> Menu </a></li>
                <li><a href="/reservation"> Reserve a Table </a></li>
                <li><a href="/contact"> Contact </a></li>
            </ul>
        </nav>
    );
};