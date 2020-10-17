import React, { useContext, useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';

import { Form, FormGroup, Input, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import { UserContext } from '../../../App';





const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [newAdmin, setNewAdmin] = useState({})
    const handleInput = (e) => {
        const category = { ...newAdmin }
        category[e.target.name] = e.target.value;

        setNewAdmin(category);
        console.log(category, newAdmin);

    }


    const handleAll = () => {


        fetch('https://rocky-mesa-50833.herokuapp.com/addadmin',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newAdmin)
            }
        )
            .then(result => {
                alert("New Admin Added to this Website")
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


                                <Input
                                    type="email"
                                    name="name"
                                    onBlur={handleInput}
                                    placeholder="Enter Email Address to Make Admin"
                                />
                            </FormGroup>
                            <Link to='/'><Button onClick={handleAll} type="submit" size='md' color="warning">Add admin</Button></Link>
                        </Form>

                    </div>
                </div>
            </div>

        </Container>
    );
};

export default MakeAdmin;