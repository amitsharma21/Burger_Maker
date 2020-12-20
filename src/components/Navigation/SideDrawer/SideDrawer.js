import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hoc from '../../../Hoc/Hoc';
const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
    return(
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
             <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
            </div>
        </Hoc>
    );
};

export default sideDrawer;