import React from 'react'
import { Payment,Drawer,OverView,Customer,Product, Revenue, Growth,Order } from './components';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDriection: 'row' }}>


        <Drawer />
        <Switch>

          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route exact path="/overview">
            <OverView />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/revenue">
            <Revenue />
          </Route>
          <Route exact path="/growth">
            <Growth/>
          </Route>
          <Route exact path="/order">
            <Order/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
