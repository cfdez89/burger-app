
import React from 'react';

const BuildControl = (props) => (
    <div className="build-control">
        <div className="label">{props.label}</div>
        <button className="less" onClick={props.removeIngredientClick}>Less</button>
        <button className="more" onClick={props.addIngredientClick}>More</button>
    </div>
);

export default BuildControl;