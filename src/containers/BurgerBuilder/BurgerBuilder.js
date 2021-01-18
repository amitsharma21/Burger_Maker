import React, {Component} from 'react';
import {connect} from 'react-redux';

import Hoc from '../../Hoc/Auux/Hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../Hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component{
    state={
        purchasing:false,
        loading:false,
        error:false
    }
    componentDidMount(){
        // axios.get('/ingredients.json')
        // .then(response=>{
        //     this.setState({ingredients:response.data});
        // })
        // .catch(error=>{
        //     this.setState({error:true});
        // });
    }
    updatePurchaseState=(ingredients)=>{
        
        const sum=Object.keys(ingredients)
            .map(igKey=>{
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0);
       return sum>0; 
    }
   
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
         this.props.history.push({ pathname:'/checkout'});
    }
    render(){
        const disabledInfo={
            ...this.props.ings,
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        let orderSummary=null;
        let burger=this.state.error?<p>Ingredients can not be loaded</p>:<Spinner/>
        if(this.props.ings!==null){
            burger=<Hoc>
            <Burger ingredients={this.props.ings}/>
            <BuildControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={this.updatePurchaseState(this.props.ings)}
                price={this.props.price}
                ordered={this.purchaseHandler}/>
             </Hoc>
             orderSummary=<OrderSummary 
             ingredients={this.props.ings}
             purchaseCanceled={this.purchaseCancelHandler}
             purchaseContinued={this.purchaseContinueHandler}
             price={this.props.price}/>
        }
        if(this.state.loading){
            orderSummary=<Spinner/>
        }
        return(
            <Hoc>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Hoc>
        );
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.ingredients,
        price:state.totalPrice
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onIngredientAdded:(ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
        onIngredientRemoved:(ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));