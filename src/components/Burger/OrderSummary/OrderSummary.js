import React from 'react';
import Hoc from '../../../Hoc/Hoc';
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
            <p>Continue To Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Hoc>
    );
};

export default orderSummary;