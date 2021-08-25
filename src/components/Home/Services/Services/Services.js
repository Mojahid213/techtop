import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import axios from 'axios';


const Services = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://tech-top.herokuapp.com/services')
            .then(response => {
                setData(response.data);
                setLoading(false)
            })
    }, [])

    return (
        <div className="mt-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-Signika font-extrabold">OUR <span className="font-extrabold text-indigo-900">SERVICES</span></h1>
                <p className="font-Ubuntu text-lg">Services that we provide in our website</p>
            </div>
            {Loading ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center text-center gap-7 md:gap-10 px-10 sm:px-20 lg:px-32">
                    {
                        [1, 2, 3].map((detail) =>
                            <div key={detail} className="flex flex-1 flex-col border-2 border-gray-700 px-2 py-2 h-full shadow-lg transform sm:transform-gpu hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
                                <div className="h-full animate-pulse">
                                    <div className="rounded-md mx-auto h-60 bg-gray-400 mb-2"></div>
                                    <div className="rounded-md h-12 bg-gray-400 mx-auto"></div>
                                    <div className="flex flex-col gap-y-1 my-2">
                                        <div className="rounded-md h-4 bg-gray-400"></div>
                                        <div className="rounded-md h-4 bg-gray-400 w-5/6"></div>
                                        <div className="rounded-md h-4 bg-gray-400 w-11/12"></div>
                                        <div className="rounded-md h-4 bg-gray-400"></div>
                                    </div>
                                    <div className="rounded-md h-10 bg-gray-400 w-8/12"></div>
                                </div>
                            </div>
                        )
                    }
                </div>
                : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center text-center gap-7 md:gap-10 px-10 sm:px-20 lg:px-32">
                    {
                        data.map(detail => <ServiceInfo details={detail} key={detail.id}></ServiceInfo>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;