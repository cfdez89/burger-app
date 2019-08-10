import React from 'react';

import BurgerIngredient from './burgerIngredient/BurgerIngredient';
import { 
    BREAD_TOP, 
    BREAD_BOTTOM, 
    CHEESE, 
    MEAT
} from './burgerIngredient/ingredientType';

const Burger = (props) => {
    return (
        <div className="burger">
            <BurgerIngredient type={BREAD_TOP}/>
            <BurgerIngredient type={CHEESE}/>
            <BurgerIngredient type={MEAT}/>
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );

};

export default Burger;