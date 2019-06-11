import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Users from "./Customer/Users";
import EditCustomer from "./Customer/EditCustomer";
import AddCustomer from "./Customer/CreateCustomer";
import Login from "./Login/Login";
import NotFound from "./NotFound";
import Home from "./Inc/Home";
import LogOut from "./Inc/Logout";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/edit/:id" component={EditCustomer} />
        <Route path="/addCustomer" component={AddCustomer} />
        <Route path="/home" component={Home} />
        <Route path="/logout" component={LogOut} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
