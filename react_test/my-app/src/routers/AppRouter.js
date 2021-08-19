import React from "react";
import {MarvelScreen} from '../components/marvel/MarvelScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";

export const AppRouter= ()=> {
    return(<Router>
        <div>
        <Switch>
            <Route exact path="/"component={MarvelScreen}/>
        </Switch>
        </div>
        </Router>)
} 


