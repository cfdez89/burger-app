
import React, { Component } from 'react';

import Aux from '../../shared/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/shared/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary'
import { INGREDIENT_PRICES } from './ingredientPrices';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
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

    purshaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purshaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purshaseContinueHandler = () => {
        alert('continue!');
    }

    render(){
        const disabled = this.disabledIngredients();
        return (
            <Aux>
                <Modal show={this.state.purchasing} hideClick={this.purshaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        purchaseCancelClick={this.purshaseCancelHandler}
                        purchaseContinueClick={this.purshaseContinueHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    addIngredientClick={this.addIngredientHandler} 
                    removeIngredientClick={this.removeIngredientHandler}
                    disabled={disabled}
                    orderClick={this.purshaseHandler}
                />
            </Aux>
        );
    }

}

export default BurgerBuilder;