import React from 'react';
import Contact from "../Contact/Contact";
import CopyRight from "../Copyright/Copyright";

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Contact/>
                        <CopyRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
