import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faShoppingBasket, faPencilAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App'
import ReviewItem from './ReviewItem';
import axios from 'axios';
import Modal from 'react-modal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const Review = () => {
    let history = useHistory();

    const [user] = useContext(UserContext);

    // Items count state
    const [count, setCount] = useState(null);
    // Loading State
    const [loading, setLoading] = useState(true);
    // Modal State
    const [modalOpen, setModalOpen] = useState(false);

    // Modal button click handeler
    const handleModal = () => {
        setModalOpen(false);
        history.push("/");
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/purchases/count?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`,
            },
        })
            .then(res => {
                setCount(res.data);
                setLoading(false);
                if (res.data < 1) {
                    setModalOpen(true)
                }
            })
            .then(err => {
                if (err) {
                    console.log(err);
                }
            })
    }, [user.email])

    return (
        <div className="2xl:container">
            <div className="flex flex-col md:flex-row gap-y-10">
                <div className="p-5 md:p-0">
                    <div className="flex flex-col w-full md:w-52 lg:w-60 xl:w-64 h-full md:h-screen py-8 bg-white shadow-md border">
                        <div className="flex flex-col items-center mt-5 -mx-2">
                            <div className="cursor-pointer flex justify-center items-center h-16 w-16 md:h-20 md:w-20 bg-black text-white font-RobotoSlab rounded-full p-1.5 mx-auto"><span className="text-3xl md:text-4xl">{user.avatar}</span></div>
                            <h4 className="mx-2 mt-2 font-bold text-center md:text-lg text-gray-800 font-RobotoSlab uppercase">{user.name}</h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-center text-gray-700 font-Signika">{user.email}</p>
                        </div>

                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <Link id="dashboard" className="flex items-center text-lg font-Signika px-6 py-2" to="/profile/dashboard">
                                    <FontAwesomeIcon icon={faColumns} />
                                    <span className="mx-4 font-medium">Dashboard</span>
                                </Link>

                                <Link id="purchase" className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/profile/purchases">
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                    <span className="mx-4 font-medium">Purchases</span>
                                </Link>

                                <Link id="review" className="flex items-center text-lg font-Signika px-6 py-2 mt-2 bg-cs-black text-white" to="/profile/review">
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                    <span className="mx-4 font-medium">Review</span>
                                </Link>

                                <Link id="home" className="flex items-center text-lg font-Signika px-6 py-2 mt-2" to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                    <span className="mx-4 font-medium">Home</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-5 md:px-10 md:mt-5">
                    <h1 className="text-3xl font-Ubuntu font-bold text-center mb-1">Write Review</h1>
                    <hr className="mb-8" />
                    {loading ?
                        <div className="flex justify-center mt-5">
                            <Loader
                                type="ThreeDots"
                                color="black"
                                height={100}
                                width={100}
                            />
                        </div>
                        : <div>
                            {count < 1 ?
                                <Modal
                                    isOpen={modalOpen}
                                    className="bg-white w-3/4 sm:max-w-xs sm:w-full h-64 sm:h-56 absolute top-0 right-0 left-0 bottom-0 m-auto p-4 border rounded-lg shadow-lg overflow-auto"
                                >
                                    <h1 className="font-RobotoSlab text-2xl text-center text-red-500">Purchase First!</h1>
                                    <hr className="mt-1" />
                                    <p className="font-Signika mt-5 text-justify">To write a review, you must purchase our services. Without purchasing any service, you can't write any review</p>
                                    <div className="flex justify-center mt-3">
                                        <button onClick={handleModal} className="px-5 py-2 font-Signika rounded-lg bg-black text-white ring-black focus:ring-2 focus:ring-offset-2 transition duration-300">OK</button>
                                    </div>
                                </Modal>
                                : <ReviewItem></ReviewItem>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;