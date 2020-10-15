import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'reactstrap';
import {  UserContext } from '../../../App';



const ServiceList = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [servicesData, setServicesData] = useContext(ServiceContext)


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/serviceList?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <div className="d-flex justify-content-between">
                <p><Link to="/"><img
                    className="logoStyle"
                    src="https://i.ibb.co/kmzR5Ly/logo.png"
                    alt=""
                /></Link></p>
                <p>Customer</p>
    <p>{loggedInUser.name}</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <Link className="NavLinkStyle" to="/" ><p className="    mb-3"  >
                            <i className="fas fa-cart-plus mr-2"></i>
                        Order </p>
                        </Link>
                    </div>
                    <div>
                        <NavLink className="NavLinkStyle" to="/servicelist" >
                            <p className="   ">
                                <i className="fas fa-list-ul mr-2"></i>
                                    Service List
                                </p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="NavLinkStyle" to="/review" >
                            <p className="   ">
                                <i className="fal fa-comment-alt-check mr-2"></i>
                                    Review
                                </p>
                        </NavLink>
                    </div>

                </div>
                <div className="col-md-8 w-75">
                   
<div className="row">
{
    services.map((list,i)=> 
         
     <div key={i} className="col-md-4">
          <Card>
     <CardImg top  width="100%" src={list.photo} alt="Card image cap" />
     <CardBody>
       <CardTitle>{list.course}</CardTitle>
    <CardText> <small>{list.description}</small> </CardText>
     
       <Button color="info">Cancel</Button>
     </CardBody>
   </Card>

      </div>
   
    )
}
</div>
                    



                </div>
            </div>

        </Container>
    );
};

export default ServiceList;