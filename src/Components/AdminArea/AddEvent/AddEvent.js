import React, { useContext, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

import { Form, FormGroup,Input, Container, Label } from 'reactstrap';
import { Button } from 'reactstrap';
import { UserContext } from '../../../App';




const AddEvent = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    const [addService, setaddService] = useState({})

    const handleInput = (e) => {

        setaddService({...addService, [e.target.name]:e.target.value})
    }

    


    const handleAll = () => {

        const formData=new FormData()
        formData.append('file',addService.img)
        formData.append('description',addService.description)
        formData.append('serviceTitle',addService.serviceTitle)


        fetch('http://localhost:5000/addevent',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body:JSON.stringify(formData)
                
            }
        )
            .then(result => {
                alert("Event Added for Volunteering")
            })
    }
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
                        <Link className="NavLinkStyle" to="/servicelistforadmin" ><p className="    mb-3"  >
                            <i className="fas fa-cart-plus mr-2"></i>
                        Service List </p>
                        </Link>
                    </div>
                    <div>
                        <NavLink className="NavLinkStyle" to="/addevent" >
                            <p className="   ">
                             <i className="fas fa-plus mr-2"></i>
                                    Add service
                                </p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="NavLinkStyle" to="/makeadmin" >
                            <p className="   ">
                                <i className=" fal fa-user mr-2"></i>
                                    Make admin
                                </p>
                        </NavLink>
                    </div>

                </div>
                <div className="col-md-8 w-75">
                <div>
                        
                        <Form className="w-75 justify-content-start">
                    <FormGroup>
    
                    <Label><strong>Service Title</strong></Label>
                        <Input
                            type="text"
                            name="name"
                            className="inputForOrder"
                            onBlur={handleInput}
                            placeholder="Enter service Title"
                        />
                    </FormGroup>
                    <FormGroup>
    
                        <Label><strong>Description</strong></Label>
                        <Input
                            type="text"
                            name="description"
                            className="inputForOrder"
                            onBlur={handleInput}
                            placeholder= "Description"
                        />
                    </FormGroup>
                    <FormGroup>
    
                    <Label><strong>Icon</strong></Label>
                        <Input
                            type="file"
                            onChange={e=>setaddService({...addService,img:e.target.files[0]})}
                            
                          
                            onBlur={handleInput}
                        
                        />
                    </FormGroup>
                   
    
    
    
                    <Link to='/addevent'><Button onClick={handleAll} type="submit" size='md' color="warning">Add Event</Button></Link>
                </Form>
    
                        </div>
                </div>
            </div>

        </Container>
    );
};

export default AddEvent;