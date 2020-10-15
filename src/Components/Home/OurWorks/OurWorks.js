import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './OurWorks.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3,
        slidesToSlide: 2,
    },
    tablet: {
        breakpoint: { max: 1199, min: 576 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 575, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const OurWorks = () => {
    return (
        <div style={{backgroundColor: "#111430"}} className="mt-4 py-5">
            <h3  className="text-white text-center pb-2">Here are some of <span className="text-success text-center">Our Works</span></h3>
            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                showDots ={true}
                autoPlaySpeed={4000}
                arrows={false}
                customTransition="tr­ansform 1000ms ease-in-out"
                itemClass="p-2"
            >
                <img src="https://i.ibb.co/ypG4CBB/carousel-1.png" alt="" />
                <img src="https://i.ibb.co/DL5MS05/carousel-2.png" alt="" />
                <img src="https://i.ibb.co/gWKC5rv/carousel-3.png" alt="" />
               

            </Carousel>


        </div>
    );
};

export default OurWorks;