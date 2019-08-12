
import React from 'react';
import Logo from '../shared/Logo';
import NavigationItems from './NavigationItems';

const Navigation = (props) => (
    <header className="toolbar">  
        <div>...</div>    
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Navigation;