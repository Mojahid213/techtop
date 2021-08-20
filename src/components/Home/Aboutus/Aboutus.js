import React from 'react';
import AboutImg from '../../../assets/Img/banner-2.png'

const Aboutus = () => {
    return (
        <div id="about" className="mt-10 pt-5 pb-5 bg-gray-50 relative">
            <h1 className="text-4xl font-Signika font-extrabold text-center mb-10"><span className="text-indigo-900">WHO</span> WE ARE</h1>
            <div className="flex flex-col md:flex-row gap-10 px-5 md:px-10 justify-center items-center">
                {/* ---- The image div ---- */}
                <div className=" flex flex-1 justify-center items-center z-10">
                    <img data-aos="fade-right" data-aos-duration="1500" src={AboutImg} className="w-full lg:w-11/12" alt="" />
                </div>
                {/* ------ The content div ----- */}
                <div data-aos="fade-down" data-aos-duration="1500" className="flex flex-col flex-1 justify-center items-center text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl font-RobotoSlab font-bold leading-snug">A TEAM OF AMAZING PEOPLE WHO WORK FOR AMAZING PEOPLE</h1>
                    <p className="font-Ubuntu text-lg font-semibold leading-relaxed mt-5">TechTop is an online service providing website that provides services like Web-Development, Digital Marketing and Graphic Design to help people to start or grow their online-based business or startup. There are a group of skilled people waiting to help people with the services.</p>
                </div>
            </div>
            <div className="absolute hidden md:block overflow-hidden h-56 lg:h-64 w-2/4 rounded-r-full left-0 md:top-56 lg:top-1/3 bg-cs-black bg-opacity-80"></div>
        </div>
    );
};

export default Aboutus;