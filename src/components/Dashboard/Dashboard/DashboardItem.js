import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faClock, faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { UserContext } from '../../../App';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const DashboardItem = () => {
    const [user] = useContext(UserContext);

    // Loading State
    const [purchaseLoading, setPurchaseLoading] = useState(true);
    const [pendingLoading, setPendingLoading] = useState(true);
    const [completeLoading, setCompleteLoading] = useState(true);


    const [purchased, setPurchased] = useState('');
    const [pending, setPending] = useState('');
    const [completed, setCompleted] = useState('');
    // Purchase, pending and completed count
    useEffect(() => {
        // purchase count
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`,
            },
        })
            .then(res => {
                setPurchased(res.data);
                setPurchaseLoading(false);
            })
            .then(err => {
                if (err) {
                    console.log(err);
                }
            })

        // pending count
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}&completed=false`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`,
            },
        })
            .then(res => {
                setPending(res.data);
                setPendingLoading(false);
            })
            .then(err => {
                if (err) {
                    console.log(err);
                }
            })

        // completed count
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}&completed=true`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`,
            },
        })
            .then(res => {
                setCompleted(res.data);
                setCompleteLoading(false);
            })
            .then(err => {
                if (err) {
                    console.log(err);
                }
            })
    }, [user.email])

    return (
        <div>
            {/* User Purchase Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* Purchase col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-blue-600 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faShoppingBasket} /> Purchased</h1>
                    {purchaseLoading ?
                        <Loader
                            type="TailSpin"
                            color="#FFFFFF"
                            height={30}
                            width={30}
                        />
                        : <p className="font-Signika text-2xl">{purchased}</p>

                    }
                </div>
                {/* Pending col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-purple-700 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faClock} /> Pending</h1>
                    {pendingLoading ?
                        <Loader
                            type="TailSpin"
                            color="#FFFFFF"
                            height={30}
                            width={30}
                        />
                        : <p className="font-Signika text-2xl">{pending}</p>

                    }
                </div>
                {/* Completed col */}
                <div className="flex flex-col justify-center items-center text-center rounded-lg px-5 py-3 bg-green-500 text-white shadow-md">
                    <h1 className="font-Signika font-bold text-2xl"><FontAwesomeIcon icon={faCheckCircle} /> Completed</h1>
                    {completeLoading ?
                        <Loader
                            type="TailSpin"
                            color="#FFFFFF"
                            height={30}
                            width={30}
                        />
                        : <p className="font-Signika text-2xl">{completed}</p>

                    }
                </div>
            </div>
            {/* User Profile */}
            <div className="mt-10 mb-5 md:mb-0 shadow-lg rounded-lg border px-5 py-3">
                <div className="flex flex-row justify-between">
                    <h1 className="font-Ubuntu text-2xl font-bold">My Profile</h1>
                    <button className="font-Ubuntu hover:text-indigo-700"><FontAwesomeIcon icon={faEdit} /> Edit</button>
                </div>
                <hr className="mt-2 mb-3" />
                <div className="flex flex-col sm:flex-row gap-x-6">
                    {/* profile image */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="cursor-pointer flex justify-center items-center h-28 w-28 md:h-32 md:w-32 bg-black text-white font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-5xl md:text-6xl">{user.avatar}</span></div>
                        <button className="my-4 h-10 w-28 font-Signika text-base border-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-lg"><FontAwesomeIcon icon={faEdit} /> Edit Profile</button>
                    </div>
                    {/* profile info */}
                    <div className="flex flex-col mt-3">
                        <div className="mb-1">
                            <label className="font-semibold font-RobotoSlab text-sm text-gray-600">Full Name</label>
                            <p className="text-xl font-Signika">{user.name}</p>
                        </div>
                        <div>
                            <label className="font-semibold font-RobotoSlab text-sm text-gray-600">Email Address</label>
                            <p className="text-xl font-Signika">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardItem;