import React from 'react';

function Navigation() {
    return (
        <nav id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="#">Dropdown</a>
                    <ul>
                        {[1, 2, 3].map(number => (<li key={number}><a href="#">{`Option ${number}`}</a></li>))}
                        <a href="#">And a submenu</a>
                        <ul>
                            {[1, 2, 3, 4].map(number => (<li key={number}><a href="#">{`Submenu ${number}`}</a></li>))}
                        </ul>
                    </ul>
                </li>
                <li><a href="#">Left Sidebar</a></li>
                <li><a href="#">Right Sidebar</a></li>
                <li><a href="#">No Sidebar</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
