import React from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import './Footer.css'


const Footer = () => {

    const handleSubmit= e =>{
        e.preventDefault();
    }
    return (
        <section className="FooterArea">
           <Container className ="py-5">
           <div className="row">
                <div className="col-md-5"><h1 className="mb-4">Lets handle Your
    <br /> project professionally
</h1>
<p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
</div>
                <div className="col-md-7">
                    <Form onSubmit= {handleSubmit}>

                        <FormGroup>

                            <Input
                                type="location"
                                name="location"
                                placeholder="Your email address"
                            />
                        </FormGroup>
                        <FormGroup>

                            <Input
                                type="location"
                                name="location"
                                placeholder="Your Name/Company Name"
                            />
                        </FormGroup>
                        <FormGroup>

                            <Input
                                type="location"
                                name="location"
                                className="input-element"
                                placeholder="Your Message"
                            />
                        </FormGroup>


                        <Button size='lg' outline color="danger">Send</Button>
                    </Form>
                </div>
            </div>
           </Container>
           <h6 className="m-auto text-center m-5 p-5"  >
                Copyright  &copy; Creative Agency 2020
                </h6>

        </section>
    );
};

export default Footer;