import React from 'react';
import { Container } from 'reactstrap';
import HeaderMaain from './HeaderMain';
import NavArea from './NavArea';
import './Header.css'

const Header = () => {
    
    return (
      <section className="skewed-bg" >
            <Container>
             <NavArea />
            <HeaderMaain />
        </Container>
      </section>
    );
   
};

export default Header;