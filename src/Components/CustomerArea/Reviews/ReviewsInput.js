import React, { useContext, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

import { Form, FormGroup,Input, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import { UserContext } from '../../../App';



const ReviewsInput = () => {
    const {id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [newReview, setNewReview] = useState({
        img: loggedInUser.photo
    })
    const handleInput = (e) => {
        const category = { ...newReview }
        category[e.target.name] = e.target.value;

        setNewReview(category);
        console.log(category, newReview);

    }

    


    const handleAll = () => {


        fetch('http://localhost:5000/feedback',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newReview)
            }
        )
            .then(result => {
                alert("Event Added for Volunteering")
            })
    }
    return (
        <Container>
            <div className="d-flex justify-content-between">
            <p><Link to = "/"><img
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
                <Link className="NavLinkStyle" to={`/order/${parseInt(id)}`} ><p className="    mb-3"  >
                        <i className="fas fa-cart-plus"></i>
                        Order </p>
                    </Link>
                </div>
                <div>
                    <NavLink className="NavLinkStyle" to="/servicelist" >
                        <p className="   ">
                            <i className="fas fa-list-ul"></i>
                                    Service List
                                </p>
                    </NavLink>
                </div>
                <div>
                    <NavLink className="NavLinkStyle" to="/review" >
                        <p className="   ">
                            <i className="fal fa-comment-alt-check"></i>
                                    Review
                                </p>
                    </NavLink>
                </div>

                </div>
                <div className="col-md-8 w-75">
                <div>
                        
                        <Form className="w-75 justify-content-start">
                    <FormGroup>
    
                        
                        <Input
                            type="text"
                            name="name"
                            className="inputForOrder"
                            onBlur={handleInput}
                            placeholder="Your Name"
                        />
                    </FormGroup>
                    <FormGroup>
    
                        
                        <Input
                            type="text"
                            name="company"
                            className="inputForOrder"
                            onBlur={handleInput}
                            placeholder= "Company Name/designation"
                        />
                    </FormGroup>
                    <FormGroup>
    
                        
                        <Input
                            type="text"
                            name="description"
                            className="input-element"
                            onBlur={handleInput}
                            placeholder= "Give Enthusiast Review"
                        />
                    </FormGroup>
                   
    
    
    
                    <Link to='/'><Button onClick={handleAll} type="submit" size='md' color="warning">Feedback</Button></Link>
                </Form>
    
                        </div>
                </div>
            </div>

        </Container>
    );
};

export default ReviewsInput;