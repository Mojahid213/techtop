import React from 'react';
import BanngerImg from '../../../../assets/Img/banner-3.png'

const HeaderInfo = () => {
    return (
        <div className="relative">
            <div className="flex flex-col-reverse md:flex-row gap-10 px-5 md:px-10 mt-10 md:mt-14 justify-center items-center">
                {/* The content text */}
                <div className="flex flex-col flex-1 items-center justify-center text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-RobotoSlab font-extrabold mb-4 tracking-wide">START AND GROW YOUR DIGITAL BUSINESS WITH US</h1>
                    <p className="text-lg font-semibold font-Ubuntu lg:leading-relaxed">Our dream is to make others dream come true. We provide all kinds of services needed to start a digital business. Whether you already have an online business or willing to start any startup, we are always with you.</p>
                    <button className="px-5 py-3 bg-cs-black text-white rounded-lg font-bold hover:bg-cs-ebony transition duration-300 mt-5">Get Started</button>
                </div>
                {/* The content image */}
                <div className="justify-center flex flex-1 items-center z-10">
                    <img className=" w-11/12 lg:w-4/5" src={BanngerImg} alt="" />
                </div>
            </div>
            <div className="hidden md:block md:h-56 lg:h-64 w-2/4 rounded-l-full overflow-hidden absolute right-0 md:top-28 lg:top-1/4 bg-cs-black bg-opacity-80"></div>
        </div>
    );
};

export default HeaderInfo;