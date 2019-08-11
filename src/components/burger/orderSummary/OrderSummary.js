import React from 'react';

import Aux from '../../../shared/Aux';
import Button from '../../shared/Button';

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
            <p>Total price: <strong>${props.price.toFixed(2)}</strong></p>
            <p>Continue to check out?</p>
            <Button clicked={props.purchaseCancelClick}>Cancel</Button>
            <Button clicked={props.purchaseContinueClick}>Continue</Button>
        </Aux>
    );
};

export default OrderSummary;