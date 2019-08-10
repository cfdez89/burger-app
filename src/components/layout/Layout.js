import React from 'react';

import Aux from '../../shared/Aux';

const Layout = (props) => {
    return (
        <Aux>
            <div> 3 comps </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};
export default Layout;