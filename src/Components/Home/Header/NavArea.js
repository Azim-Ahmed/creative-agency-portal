import React, { useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink
} from 'reactstrap';
import { UserContext } from '../../../App';

const NavArea = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <div>
      <Navbar  light expand="md">
        <NavbarBrand href="/"><img className="logoStyle" src='https://i.ibb.co/kmzR5Ly/logo.png' alt=""/></NavbarBrand>
          <Nav  className="ml-auto align-items-center" navbar>
            <NavItem>
              <NavLink className="mr-3  text-secondary" href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-4" href="/portfolio"> Our Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="mr-3" href="/customer">Our Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3" href="/#contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
           {
             loggedInUser.email? <h5>{loggedInUser.name}</h5> :  <Button  outline color = "danger" className="text-center">  <NavLink className="mr-3" href="/login"> Login </NavLink></Button>
           }
            </NavItem>
           
          
          </Nav>
       
        
      </Navbar>
    </div>
  );
}

export default NavArea;