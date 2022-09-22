import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CssBaseLine from "@material-ui/core/CssBaseline";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        padding: 20,
    },
});

const App = () => {
    const classes = useStyles();

    return <Router>
        <CssBaseLine/>
        <NavBar/>
        <Container  className={classes.root}>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Container>
    </Router>
}

export default App;
