import React from 'react';
import faqImg from '../../../assets/Img/faq.svg'
import FaqItems from './FaqItems';

const Faq = () => {
    return (
        <div className="mb-10">
            <div className="text-center mt-5 mb-5 px-4">
                <h1 className="font-Signika text-3xl sm:text-4xl font-extrabold uppercase">Frequently <span className="text-indigo-900">Asked</span></h1>
                <p className="font-Ubuntu">Frequently asked questions by customers</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center px-5 lg:px-10 gap-y-10">
                <div className="flex flex-1 items-center justify-center pt-5">
                    <img src={faqImg} className="w-11/12" alt="faqImg" />
                </div>
                <div className="flex md:flex-1 w-full items-center justify-center md:pt-5">
                    <FaqItems></FaqItems>
                </div>
            </div>
        </div>
    );
};

export default Faq;