import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Customer from './Components/CustomerArea/Customer/Customer';
import Order from './Components/CustomerArea/Order/Order';
import ServiceList from './Components/CustomerArea/ServiceList/ServiceList';
import ReviewsInput from './Components/CustomerArea/Reviews/ReviewsInput';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import ServiceListForAdmin from './Components/AdminArea/ServiceListForAdmin/ServiceListForAdmin'
import AddEvent from './Components/AdminArea/AddEvent/AddEvent'
import MakeAdmin from './Components/AdminArea/MakeAdmin/MakeAdmin';


export const UserContext = createContext()
export const ServiceContext = createContext()



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [servicesData, setServicesData] = useState([])
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
          <PrivateRoute path="/order/:id">
<Order></Order>
          </PrivateRoute>
          
          {/* <Route path="/order/:id">
<Order></Order>
          </Route> */}
          <Route path="/servicelist">
<ServiceList></ServiceList>
          </Route>
          <Route path="/review">
<ReviewsInput></ReviewsInput>
          </Route>
          <Route path="/servicelistforadmin">
          <ServiceListForAdmin></ServiceListForAdmin>
          </Route>
          <Route path="/addevent">
           <AddEvent></AddEvent>
          </Route>
          <Route path="/makeadmin">
         <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
          
        </Switch>
      </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
