
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
        totalPrice: 4,
        purchaseable: false
    }

    updateIngredientsState = (updatedIngredients, newPrice) => {
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatedPurchaseState(updatedIngredients);
    }

    updatedPurchaseState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients).map(ingKey => {
            return updatedIngredients[ingKey];
        }).reduce((sum, elem) => {
            return sum+elem;
        }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    disabledIngredients = () => {
        const disabledIngredient = Object.assign({}, this.state.ingredients);
        for (let key in disabledIngredient){
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }
        return disabledIngredient;
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = Object.assign({}, this.state.ingredients);
        updatedIngredients[type] = this.state.ingredients[type]+1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.updateIngredientsState(updatedIngredients, newPrice);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0) return;
        const updatedIngredients = Object.assign({}, this.state.ingredients);
        updatedIngredients[type] = this.state.ingredients[type]-1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.updateIngredientsState(updatedIngredients, newPrice);
    }

    render(){
        const disabled = this.disabledIngredients();
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    addIngredientClick={this.addIngredientHandler} 
                    removeIngredientClick={this.removeIngredientHandler}
                    disabled={disabled}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;