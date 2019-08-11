import React from 'react';

import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => (
    <div className="build-controls">
        <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    addIngredientClick={()=>props.addIngredientClick(ctrl.type)}
                    removeIngredientClick={()=>props.removeIngredientClick(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            );
        })}
        <button 
            className="order-button"
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >Order now</button>
    </div>
);

export default BuildControls;