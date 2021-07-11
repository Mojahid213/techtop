import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import AllService from '../service.json'
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(AllService)
    }, [])
    return (
        <div className="mt-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-Signika font-extrabold">OUR <span className="font-extrabold text-indigo-900">SERVICES</span></h1>
                <p className="uppercase font-Ubuntu">Services that we provide in our website</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center text-center gap-7 md:gap-10 px-12 sm:px-20 lg:px-32">
                {
                    data.map(detail => <ServiceInfo details={detail}></ServiceInfo>)
                }
            </div>
        </div>
    );
};

export default Services;