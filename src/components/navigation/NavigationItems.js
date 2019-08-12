
import React from 'react';
import NavigationItem from '../navigation/NavigationItem';

const NavigationItems = (props) => (
    <ul className="navigation-items">
        <NavigationItem link="/" active>Burger builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;