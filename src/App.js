import React from 'react'
<<<<<<< HEAD
import { Payment,Drawer,OverView,Product, Revenue } from './components';
import Customer from './components/pages/Customers/Customer';
=======
import { Payment,Drawer,OverView,Customer,Product, Revenue, Growth,Order } from './components';
>>>>>>> fe78ba7d9efb74a7dfc320fd13795931a6e652f9
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CustomerInfor from './components/pages/CustomersIfors/CustomerInfor';
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDriection: 'row' }}>


        <Drawer />
        <Switch>

          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="/customer/:customerId">
            <CustomerInfor />
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
