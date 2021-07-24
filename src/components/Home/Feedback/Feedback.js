import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedbackInfo from './FeedbackInfo';
import axios from 'axios';



const Feedback = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(response => setReview(response.data))
    }, [])
    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 764,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <div className="mt-20">
            {/* Section Heading */}
            <div className="text-center mb-5">
                <h1 className="text-4xl font-Signika uppercase font-extrabold">Clients <span className="text-indigo-900">Feedback</span></h1>
                <p className="font-Ubuntu text-lg">Valuable feedback given by our clients</p>
            </div>
            {/* review swiper */}
            <div>
                <Slider {...settings} className=" overflow-x-hidden">
                    {
                        review.map(detail => <FeedbackInfo detail={detail} key={detail.id}></FeedbackInfo>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;