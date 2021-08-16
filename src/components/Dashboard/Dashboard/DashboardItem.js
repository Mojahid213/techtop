import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { UserContext } from '../../../App';

const DashboardItem = () => {
    const [user] = useContext(UserContext);

    const [purchased, setPurchased] = useState('');
    const [pending, setPending] = useState('');
    const [completed, setCompleted] = useState('');
    // purchased
    useEffect(() => {
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}`)
            .then(res => {
                setPurchased(res.data);
            })
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}&completed=false`)
            .then(res => {
                setPending(res.data);
            })
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}&completed=true`)
            .then(res => {
                setCompleted(res.data);
            })
    }, [user.email])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* first col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-blue-600 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faShoppingBasket} /> Purchased</h1>
                    <p className="font-Signika text-2xl">{purchased}</p>
                </div>
                {/* second col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-purple-700 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faClock} /> Pending</h1>
                    <p className="font-Signika text-2xl">{pending}</p>
                </div>
                {/* third col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-green-500 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faCheckCircle} /> Completed</h1>
                    <p className="font-Signika text-2xl">{completed}</p>
                </div>
                {/* first item */}
                {/* <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-black text-white">
                    <h1 className="font-Signika font-bold text-xl">Total Purchases</h1>
                    <h1>100</h1>
                </div> */}
            </div>
        </div>
    );
};

export default DashboardItem;