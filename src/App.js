import React from 'react'
import Drawer from './components/Drawer/Drawer'
import Customer from './components/Customers/Customer';
import OverView from './components/OverView/OverView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div style={{display:'flex', flexDriection:'row'}}>


        <Drawer />
        <Switch>
          <Route exact path="/">
            <OverView />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
