import React,{Component} from 'react';
import Hoc from '../../../Hoc/Auux/Hoc';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>);
        });
    return(
        <Hoc>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following Ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Hoc>
    );
    }
    
};

export default OrderSummary;