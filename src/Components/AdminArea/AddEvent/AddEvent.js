import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Form, FormGroup, Input, Container, Label } from 'reactstrap';
import { Button } from 'reactstrap';
import { UserContext } from '../../../App';


const AddEvent = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [service, setService] = useState({})
    const inputFormDataHandle = event => {
        setService({ ...service, [event.target.name]: event.target.value })
    }
    const addServiceFormHandler = (e) => {
        const formData = new FormData()
        formData.append('file', service.img)
        formData.append('description', service.description)
        formData.append('serviceTitle', service.serviceTitle)

        fetch('http://localhost:5000/addevent', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
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
                                    className="inputForOrder"
                                    onBlur={inputFormDataHandle}
                                    name='serviceTitle'
                                    placeholder="Enter service Title"
                                />
                            </FormGroup>
                            <FormGroup>

                                <Label><strong>Description</strong></Label>
                                <Input
                                    type="text"
                                    name="description"
                                    className="inputForOrder"
                                    onBlur={inputFormDataHandle}
                                    placeholder="Description"
                                />
                            </FormGroup>
                            <FormGroup>

                                <Label><strong>Icon</strong></Label>
                                <Input
                                    type="file"
                                    onChange={event => setService({ ...service, img: event.target.files[0] })}
                                />
                            </FormGroup>




                            <Link to='/makeadmin'><Button onClick={addServiceFormHandler} type="submit" size='md' color="warning">Add Course</Button></Link>
                        </Form>

                    </div>
                </div>
            </div>

        </Container>
    );
};

export default AddEvent;