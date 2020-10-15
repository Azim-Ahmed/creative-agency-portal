import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';


const HeaderMaain = () => {
    return (
      
       <Row style = {{height:"600px"}} className="d-flex align-items-center">
           <Col md={5}>
               <h1 style = {{color : '#3A4256'}}>LET'S GROW YOUR<br/>
               BRAND TO THE <br/>
               NEXT LEVEL</h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam in similique eveniet nisi non excepturi doloremque amet temporibus, nihil et hic aliquid atque sed aperiam. Veritatis dicta ut iure.</p>
               <Button  outline color ="primary">HIRE US</Button>

           </Col>
           <Col md={6}>
<Container>
<img src="https://i.ibb.co/Jjckyyr/Frame.png" alt="" className="img-fluid"/>
</Container>
           </Col>
       </Row>
    );
};

export default HeaderMaain;