import React, { useEffect, useState } from 'react';
import Spinners from '../../Spinners/Spinners';

const ClientsFeedback = () => {

   const [feedbackData ,setFeedbackData] = useState([])
   useEffect(() => {
    fetch('http://localhost:5000/reviewlist')
    .then(res=>res.json())
    .then(data =>setFeedbackData(data))
   },[])

    return (
        <section className="text-center my-5 ">
            <div className="text-center mt-5">

                <h2>Clients <span style={{ color: 'green' }}>Feedback</span></h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className='row w-75 mt-5 py-3'>
                    {
                      feedbackData.length ?  feedbackData.map((review, i) =>
                            <div key={i} className='servicesArea col-md-4 text-center'>
                                <div className="d-flex pt-3">
                                    <div>
                                        <img className='mb-3 mr-2' style={{ height: "70px" }} src={review.img} alt="" />
                                    </div>
                                    <div>
                                        <h5>{review.name}</h5>
                                        <h6>{review.company}</h6>
                                    </div>
                                </div>
                                <p className="text-secondary">{review.description}</p>
                            </div>
                        )
                        :  <Spinners></Spinners>
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;