
import React from 'react';

const NavigationItem = (props) => ( 
    <li className="navigation-item">
        <a href={props.link} className={null}>
            {props.children}
        </a>
    </li>
);

export default NavigationItem;

// correct <a> active class