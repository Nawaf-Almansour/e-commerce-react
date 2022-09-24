import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CssBaseLine from "@material-ui/core/CssBaseline";
import {Container, makeStyles} from "@material-ui/core";
import {CartProvider} from "./contexts/CartContext";
import Cart from "./pages/Cart";

const useStyles = makeStyles({
    root: {
        padding: 20,
    },
});

const App = () => {
    const classes = useStyles();

    return (
        <CartProvider>
            <Router>
                <CssBaseLine/>
                <NavBar/>
                <Container className={classes.root}>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/cart'>
                            <Cart/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </CartProvider>
    );
}

export default App;
