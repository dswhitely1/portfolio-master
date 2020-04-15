import React, {useState} from 'react';
import {navItems, NavItem} from "./navigation_items";
import {useLocation} from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const [links] = useState<NavItem[]>(navItems);
    return (
        <nav id="nav">
            <ul>
                {links.map(({link, title}, i) => (
                    <li key={i}>
                        <a href={link} className={location.hash === link ? 'active' : ''}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;
