import React from 'react';

import Aux from '../../shared/Aux';
import Navigation from '../navigation/Navigation';
import SideDrawer from '../navigation/SideDrawer';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation/>
           
            <main className="main">
                {props.children}
            </main>
        </Aux>
    );
};
export default Layout;
 //<SideDrawer/>