import React from 'react';
import supportImg from '../../../assets/Img/support.png'

const Support = () => {
    return (
        <div className="mt-8 px-10 bg-blue-50 pt-10 pb-20 lg:pb-0">
            <div className="text-center mb-10 md:mb-2">
                <h1 className="text-3xl sm:text-4xl font-Signika uppercase font-extrabold">our <span className="text-indigo-900">supports</span></h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col-reverse md:flex-row justify-center items-center gap-x-4">
                {/* content */}
                <div className="flex flex-1 flex-col justify-center items-center text-center md:text-left md:pt-5">
                    <h1 className="uppercase text-3xl md:text-4xl font-RobotoSlab font-extrabold">get the support whenever you want.</h1>
                    <p className="font-Ubuntu sm:font-bold mt-3 md:mt-5">We give support for 24/7 days. Whether you want any technical support or want to know more about our company, you can get out support at any time. Feel free to take any support for any kind of service we provide.</p>
                    <button className="text-white bg-cs-black px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-cs-ebony transition duration-300">Get Support</button>
                </div>
                {/* image */}
                <div className="flex flex-1 justify-center items-center z-10">
                    <img src={supportImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Support;