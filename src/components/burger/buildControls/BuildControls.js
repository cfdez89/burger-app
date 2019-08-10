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
    </div>
);

export default BuildControls;