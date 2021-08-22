import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar'
import ServicePlanCard from './ServicePlanCard';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ServicePlan = () => {
    const { category } = useParams();
    // loading state
    const [loading, setLoading] = useState(true);

    // Heading name state
    const [name, setName] = useState('');
    useEffect(() => {
        if (category === 'web-developments') {
            setName('WEB DEVELOPMENT')
        }
        if (category === 'digital-marketings') {
            setName('DIGITAL MARKETING')
        }
        if (category === 'graphic-designs') {
            setName('GRAPHIC DESIGN')
        }
    }, [category])

    // Fetching data from api
    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get(`https://tech-top.herokuapp.com/${category}`)
            .then(res => {
                setDetails(res.data);
                setLoading(false);
            })
    }, [category])
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 mb-10">
                <h1 className="text-3xl font-Signika font-extrabold text-center">{name}</h1>
                <p className="text-md font-Ubuntu text-center">Choose the service that is suited for your business</p>
            </div>
            {loading ?
                <div className="flex justify-center">
                    <Loader
                        type="ThreeDots"
                        color="#000000"
                        height={100}
                        width={100}
                    />
                </div>
                : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 text-center items-start justify-center px-10 lg:px-16 mb-8">
                    {
                        details.map(detail => <ServicePlanCard details={detail} key={detail.id} category={category}></ServicePlanCard>)
                    }
                </div>

            }
        </div>
    );
};

export default ServicePlan;