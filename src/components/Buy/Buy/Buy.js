import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../../shared/Navbar';
import BuyItem from '../BuyItem/BuyItem';
import BuyPayment from '../Payments/BuyPayment';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Buy = () => {
    // user context api
    const [user] = useContext(UserContext);
    // loading state
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        if (user.name && user.email) {
            setLoading(false);
        }
    }, [user])

    return (
        <div>
            <Navbar></Navbar>
            <div data-aos="zoom-in" data-aos-duration="1000" className="xl:container mt-5 mb-4">
                <h1 className="text-center font-Signika font-extrabold text-3xl mb-14"><span className="text-indigo-900">PURCHASE</span> SERVICE</h1>
                {loading ?
                    <div className="flex justify-center">
                        <Loader
                            type="ThreeDots"
                            color="#000000"
                            height={100}
                            width={100}
                        />
                    </div>
                    : <div className="flex flex-col md:flex-row gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-32 gap-y-10 justify-center items-start text-center px-5 md:px-10">
                        <div className="flex flex-1 w-full justify-center md:justify-end">
                            <BuyItem />
                        </div>
                        <div className="flex flex-1 w-full justify-center md:justify-start">
                            <BuyPayment />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Buy;