import React,{Component} from 'react';
import Hoc from '../../Hoc/Hoc';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((preState)=>{
            return {showSideDrawer:!preState.showSideDrawer};
        });
    }
    render(){
        return(
            <Hoc>
             <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
             <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
             <main className={classes.Content}>
             {this.props.children}
             </main>
            </Hoc>
        );
    }
}
export default Layout;