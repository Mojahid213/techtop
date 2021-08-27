import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedbackInfo from './FeedbackInfo';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Sceleton from './Sceleton';




const Feedback = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://tech-top.herokuapp.com/reviews')
            .then(response => {
                setReview(response.data);
                setLoading(false)
            })
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
        <div className="mt-24">
            {/* Section Heading */}
            <div className="text-center mb-5">
                <h1 className="text-4xl font-Signika uppercase font-extrabold">Clients <span className="text-indigo-900">Feedback</span></h1>
                <p className="font-Ubuntu text-lg">Valuable feedback given by our clients</p>
            </div>
            {/* Sceleton or review swiper */}
            <div>
                {loading ?
                    <Slider {...settings} className="overflow-x-hidden">
                        {
                            [1, 2, 3, 4, 5].map(detail => <Sceleton detail={detail} key={detail}></Sceleton>)
                        }
                    </Slider>
                    : <Slider {...settings} className="overflow-x-hidden">
                        {
                            review.map(detail => <FeedbackInfo detail={detail} key={detail.id}></FeedbackInfo>)
                        }
                    </Slider>
                }
            </div>
        </div>
    );
};

export default Feedback;