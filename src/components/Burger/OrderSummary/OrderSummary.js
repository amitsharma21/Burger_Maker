import React from 'react';
import Hoc from '../../../Hoc/Hoc';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>);
        });
    return(
        <Hoc>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following Ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Hoc>
    );
};

export default orderSummary;