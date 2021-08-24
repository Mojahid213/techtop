import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Modal from 'react-modal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useHistory } from 'react-router-dom';


const ReviewItem = () => {
    let history = useHistory();

    const [user] = useContext(UserContext);

    // Modal State
    const [modal, setModal] = useState(false);

    // Loading State
    const [loading, setLoading] = useState(false);

    // review info state
    const [details, setDetails] = useState({
        name: user.name,
        avatar: user.avatar,
        company: '',
        position: '',
        description: '',
    })

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (details.name && details.avatar && details.description) {
            // sending data to server
            axios.post('https://tech-top.herokuapp.com/reviews',
                {
                    name: details.name,
                    avatar: details.avatar,
                    company: details.company,
                    position: details.position,
                    description: details.description
                },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`
                    }
                }
            )
                .then(res => {
                    e.target.reset();
                    setModal(true);
                    setLoading(false);
                })
                .then(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }
    }

    // inpur change event
    const handleChange = (e) => {
        if (e.target.name === 'company') {
            const newValue = { ...details };
            newValue.company = e.target.value;
            setDetails(newValue)
        }
        if (e.target.name === 'position') {
            const newValue = { ...details };
            newValue.position = e.target.value;
            setDetails(newValue)
        }
        if (e.target.name === 'description') {
            const newValue = { ...details };
            newValue.description = e.target.value;
            setDetails(newValue)
        }
    }

    const handleClick = () => {
        setModal(false);
        history.push('/')
    }

    console.log(loading);


    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="max-w-lg w-full px-4 py-5 border-2 border-black shadow-lg rounded-lg mt-5 mb-5">
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 md:gap-y-0">
                    <div className="flex flex-col w-full">
                        <label htmlFor="name" className="font-RobotoSlab text-lg mb-0.5">Name:</label>
                        <input value={user.name} disabled type="text" id="name" name="name" placeholder="Your name" className="border border-gray-500 focus:border-opacity-0 rounded-md focus:outline-none ring-black focus:ring-2 px-1 py-0.5 text-lg font-Signika transition duration-300 ease-in-out" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="company" className="font-RobotoSlab text-lg mb-0.5">Company Name:</label>
                        <input onChange={handleChange} type="text" id="company" name="company" placeholder="Company name(optional)" className="border border-gray-500 focus:border-opacity-0 rounded-md focus:outline-none ring-black focus:ring-2 px-1 py-0.5 text-lg font-Signika transition duration-300 ease-in-out" />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-3">
                    <label htmlFor="position" className="font-RobotoSlab text-lg mb-0.5">Your Position:</label>
                    <input onChange={handleChange} type="text" id="position" name="position" placeholder="Job position(optional)" className="border border-gray-500 focus:border-opacity-0 rounded-md focus:outline-none ring-black focus:ring-2 px-1 py-0.5 text-lg font-Signika transition duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col w-full mt-3">
                    <label htmlFor="description" className="font-RobotoSlab text-lg mb-0.5">Your Message:</label>
                    <textarea onChange={handleChange} id="description" name="description" rows="5" minLength="5" className="border border-gray-500 focus:border-opacity-0 rounded-md focus:outline-none ring-black focus:ring-2 px-1 py-0.5 text-lg font-Signika transition duration-300 ease-in-out" placeholder="Write your review" required></textarea>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="font-Signika text-lg px-5 py-2 bg-black text-white hover:bg-cs-ebony ring-black focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out rounded-lg" disabled={loading}>
                        {loading ?
                            <div className="flex justify-center">
                                <Loader
                                    type="ThreeDots"
                                    color="white"
                                    height={24}
                                    width={50}
                                />
                            </div>
                            : "Submit"
                        }
                    </button>
                </div>
            </form>

            {/* The Modal */}
            <Modal
                isOpen={modal}
                className="bg-white w-3/4 sm:max-w-xs sm:w-full h-64 sm:h-56 absolute top-0 right-0 left-0 bottom-0 m-auto p-4 border rounded-lg shadow-lg overflow-auto"
            >
                <h1 className="font-RobotoSlab text-2xl text-center text-green-500">Thank You!</h1>
                <hr className="mt-1" />
                <p className="font-Signika mt-5 text-justify">Thanks for giving us your valuable feedback. It will be pending for approval and will be published soon</p>
                <div className="flex justify-center mt-3">
                    <button onClick={handleClick} className="px-5 py-2 font-Signika rounded-lg bg-black text-white ring-black focus:ring-2 focus:ring-offset-2 transition duration-300">Go back to Home</button>
                </div>
            </Modal>
        </div>
    );
};

export default ReviewItem;