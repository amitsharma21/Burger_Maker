import React, {Component} from 'react';
import Hoc from '../../Hoc/Hoc';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }
    render(){
        return(
            <Hoc>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Hoc>
        );
    }
}
export default BurgerBuilder;