import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../../App';

import './Services.css'

const Services = () => {
    const [servicesData, setServicesData] = useContext(ServiceContext)

    

   useEffect(()=>{
    fetch('http://localhost:5000/frontcourse')
    .then(response => response.json())
    .then(data => setServicesData(data))
   },[servicesData])

    return (
        <section>


            <div className="text-center mt-5">
               
                <h2>Provide awsome <span style={{ color: 'green' }}>services</span></h2>
            </div>

          <div className = "d-flex justify-content-center">
          <div className='row w-75 mt-5 pt-5'>
                {
                    servicesData.map((service, i) =>
                        
                        <Link to =  {`/order/${service.id}`} key = {i} className='servicesArea col-md-4 text-center'>
                            <img className = 'mb-3 mt-3' style ={{height:"70px"}} src={service.img} alt="" />
                            <h5>{service.name}</h5>
                <p className = "text-secondary">{service.desc}</p>
                </Link>
                        
                    )
                }
            </div>
          </div>
        </section>
    );
};

export default Services;