
import React from 'react';
import Logo from '../shared/Logo';
import NavigationItems from './NavigationItems';

const SideDrawer = (props) => {
    return (
        <div className="side-drawer">    
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default SideDrawer;