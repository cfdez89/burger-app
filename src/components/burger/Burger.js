import React from 'react';

import BurgerIngredient from './burgerIngredient/BurgerIngredient';
import { 
    BREAD_TOP, 
    BREAD_BOTTOM, 
    CHEESE, 
    MEAT
} from './burgerIngredient/ingredientType';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => { 
            return <BurgerIngredient key={ingKey+i} type={ingKey}/>;
        })
    }).flat();

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients </p>;
    }
    return (
        <div className="burger">
            <BurgerIngredient type={BREAD_TOP}/>
            { transformedIngredients }
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );

};

export default Burger;