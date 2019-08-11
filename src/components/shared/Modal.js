import React from 'react';
import Aux from '../../shared/Aux';
import Backdrop from './Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.hideClick}/>
        <div className="modal" style={{transform: props.show? 'translateY(0)':'translateY(-100vh)', opacity: props.show? '1': '0'}}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;