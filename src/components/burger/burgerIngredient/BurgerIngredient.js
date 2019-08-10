import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
    BREAD_TOP, 
    BREAD_BOTTOM, 
    CHEESE, 
    MEAT,
    SALAD,
    BACON
} from './ingredientType';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch(this.props.type) {
            case (BREAD_BOTTOM):
                ingredient = <div className={BREAD_BOTTOM}></div>;
                break;
            case (BREAD_TOP): 
                ingredient = (<div className={BREAD_TOP}>
                    <div className='seeds1'></div>
                    <div className='seeds2'></div>
                </div>);
                break;
            case (MEAT):
                ingredient = <div className={MEAT}></div>;
                break;
            case (CHEESE):
                ingredient = <div className={CHEESE}></div>;
                break;
            case (SALAD):
                ingredient = <div className={SALAD}></div>;
                break;
            case (BACON):
                ingredient = <div className={BACON}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;