
import React, { Component } from 'react';

import Aux from '../../shared/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import { INGREDIENT_PRICES } from './ingredientPrices';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = Object.assign({}, this.state.ingredients);
        updatedIngredients[type] = this.state.ingredients[type]+1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0) return;
        const updatedIngredients = Object.assign({}, this.state.ingredients);
        updatedIngredients[type] = this.state.ingredients[type]-1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredientClick={this.addIngredientHandler} 
                    removeIngredientClick={this.removeIngredientHandler}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;