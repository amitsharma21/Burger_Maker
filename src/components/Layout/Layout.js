import React from 'react';
import Hoc from '../../Hoc/Hoc';
import classes from './Layout.css';
const layout=(props)=>{
    return(
        <Hoc>
        <div>Toolbar , sideDrawer , Backdrop</div>
        <main className={classes.Content}>
        {props.children}
        </main>
        </Hoc>
    );
}
export default layout;