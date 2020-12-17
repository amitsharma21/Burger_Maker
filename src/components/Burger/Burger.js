import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger=(props)=>{
    const transformedingredients=Object.keys(props.ingredients).map
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger;