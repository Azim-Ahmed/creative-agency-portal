import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Order from "./Components/CustomerArea/Order/Order";
import ServiceList from "./Components/CustomerArea/ServiceList/ServiceList";
import ReviewsInput from "./Components/CustomerArea/Reviews/ReviewsInput";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServiceListForAdmin from "./Components/AdminArea/ServiceListForAdmin/ServiceListForAdmin";
import AddEvent from "./Components/AdminArea/AddEvent/AddEvent";
import MakeAdmin from "./Components/AdminArea/MakeAdmin/MakeAdmin";
import NoMatch from "./Components/NoMatch/NoMatch";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [servicesData, setServicesData] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[servicesData, setServicesData]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order/:_id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/servicelist">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <ReviewsInput></ReviewsInput>
            </PrivateRoute>
            <PrivateRoute path="/servicelistforadmin">
              <ServiceListForAdmin></ServiceListForAdmin>
            </PrivateRoute>
            <PrivateRoute path="/addevent">
              <AddEvent></AddEvent>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
