import React, {Component} from 'react';
import Hoc from '../../Hoc/Hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:2,
            bacon:1,
            cheese:0,
            meat:0
        }
    }
    addIngredientHandler=(type)=>{

    }
    removeingredientHandler=()=>{

    }
    render(){
        return(
            <Hoc>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Hoc>
        );
    }
}
export default BurgerBuilder;