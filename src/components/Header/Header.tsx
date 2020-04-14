import React from 'react';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <div id="header">
            <div className="inner">
                <header>
                    <h1>
                        <a href="#" id="logo">Donald Whitely</a>
                    </h1>
                    <hr />
                    <p>A Full Stack Web Developer</p>
                </header>
                <footer>
                    <a href="#banner" className="button circled scrolly">Start</a>
                </footer>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header;
