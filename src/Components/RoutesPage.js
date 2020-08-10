import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./SearchBox/Home";
import SearchBox from "./SearchBox/SearchBox";
import ImageView from './SearchBox/ImageView';
import { Nav, NavItem, NavLink } from "reactstrap";

const RoutesPage = () => {
  return (
    <Router>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/imageview">Image View</NavLink>
          </NavItem>
          
        </Nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/imageview">
          <ImageView/>
        </Route>
        </Switch>
    </Router>
  );
}
export default RoutesPage;