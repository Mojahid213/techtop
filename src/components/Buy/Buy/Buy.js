import React from 'react';
import Navbar from '../../../shared/Navbar';
import BuyItem from '../BuyItem/BuyItem';
import BuyPayment from '../Payments/BuyPayment';

const Buy = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div data-aos="zoom-in" data-aos-duration="1000" className="xl:container mt-5 mb-14">
                <h1 className="text-center font-Signika font-extrabold text-3xl mb-14"><span className="text-indigo-900">PURCHASE</span> SERVICE</h1>
                <div className="flex flex-col md:flex-row gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-32 gap-y-10 justify-center items-start text-center px-5 md:px-10">
                    <div className="flex flex-1 w-full justify-center md:justify-end">
                        <BuyItem />
                    </div>
                    <div className="flex flex-1 w-full justify-center md:justify-start">
                        <BuyPayment />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;