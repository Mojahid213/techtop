import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar'
import ServicePlanCard from './ServicePlanCard';

const ServicePlan = () => {
    const { category } = useParams();

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
        axios.get(`http://localhost:5000/${category}`)
            .then(res => setDetails(res.data))
    }, [category])
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 mb-8">
                <h1 className="text-3xl font-Signika font-extrabold text-center">{name}</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-start justify-center px-10 lg:px-16 mb-8">
                {
                    details.map(detail => <ServicePlanCard details={detail} key={detail.id} category={category}></ServicePlanCard>)
                }
            </div>
        </div>
    );
};

export default ServicePlan;