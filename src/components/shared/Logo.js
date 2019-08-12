import React from 'react';
import burgerLogo from "../../assets/burger-logo.png";

const Logo = (props) => (
    <div className="logo">
        <img src={burgerLogo} alt="burger"/>
    </div>
);

export default Logo;