
import React, { Component } from 'react';

import Aux from '../../shared/Aux';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return (
            <Aux>
                <Burger/>
                <div>Ctrls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;