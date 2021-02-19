import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="contents">
                <p>Hecho por washimon {date}</p>
            </div>
        </div>
    );
}

export default Footer;
