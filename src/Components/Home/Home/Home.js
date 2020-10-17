import React from 'react';
import Login from '../../Login/Login';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurClients from '../OurClients/OurClients';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <OurClients></OurClients>
            <Services></Services>

            <OurWorks></OurWorks>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;