import React, {useContext} from 'react';
import {AppBar, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import { CartContext } from "../contexts/CartContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const NavBar = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        sowge
                    </Typography>
                    <Badge overlap="rectangular" color='secondary' badgeContent={cart.itemsCount}>
                        <ShoppingBasketIcon/>
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
