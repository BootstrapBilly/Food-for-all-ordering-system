import React from 'react';

//components
import Auth from "./Pages/Auth/Auth"
import TopBar from "./Shared Components/Top_bar/Top_bar"
import classes from './App.module.css';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {


  return (

    <React.Fragment>

      <TopBar />

      <div className={classes.container}>

          <BrowserRouter>

            <Switch>

              <Route path="/" exact component={Auth} />

            </Switch>

          </BrowserRouter>

      </div>

    </React.Fragment>

  );

}

export default App;
