import React from 'react';
import {AppBar, Button, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';

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

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        dakan
                    </Typography>
                    <Badge badgeContent={2} color="secondary">
                    <ShoppingBasketIcon/>
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
