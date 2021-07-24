import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import axios from 'axios';

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(response => setData(response.data))
    }, [])
    return (
        <div className="mt-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-Signika font-extrabold">OUR <span className="font-extrabold text-indigo-900">SERVICES</span></h1>
                <p className="font-Ubuntu text-lg">Services that we provide in our website</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center text-center gap-7 md:gap-10 px-12 sm:px-20 lg:px-32">
                {
                    data.map(detail => <ServiceInfo details={detail} key={detail.id}></ServiceInfo>)
                }
            </div>
        </div>
    );
};

export default Services;