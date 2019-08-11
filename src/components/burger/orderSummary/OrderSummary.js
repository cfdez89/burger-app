import React from 'react';

import Aux from '../../../shared/Aux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return (
            <li key={ingKey}>
                <span>{ingKey}: </span>{props.ingredients[ingKey]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>Ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to check out?</p>
        </Aux>
    );
};

export default OrderSummary;