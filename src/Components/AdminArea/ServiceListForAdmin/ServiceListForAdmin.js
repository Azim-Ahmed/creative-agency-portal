import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import { UserContext } from '../../../App';
import Spinners from '../../Spinners/Spinners';




const ServiceList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://rocky-mesa-50833.herokuapp.com/serviceListForAdmin')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    const handleDeleteAdmin = (id) => {
        fetch("https://rocky-mesa-50833.herokuapp.com/delete/?id=" + id, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);

                }
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

                    <div className="row">



                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">project Details</th>
                                    <th scope="col">status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.length ?
                                        services.map((list, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{list.name}</td>
                                                <td>{list.email}</td>
                                                <td>{list.course}</td>
                                                <td>{list.description}</td>


                                                <td> <Button onClick={() => handleDeleteAdmin(list._id)} color="danger">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                                    </svg></Button> </td>

                                            </tr>
                                        )
                                        : <Spinners></Spinners>
                                }

                            </tbody>


                        </Table>


                    </div>




                </div>
            </div>

        </Container>
    );
};

export default ServiceList;