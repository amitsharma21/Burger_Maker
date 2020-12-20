import React from 'react';
import Hoc from '../../Hoc/Hoc';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout=(props)=>(
    <Hoc>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
         {props.children}
        </main>
    </Hoc>
);
export default layout;