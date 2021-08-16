import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const PaymentForm = () => {
    let history = useHistory();

    // user info
    const [user] = useContext(UserContext);
    // service info
    const [service] = useState(JSON.parse(sessionStorage.getItem("service")));
    // purchased state
    const [purchased, setpurchased] = useState(false);
    // loading state
    const [loading, setLoading] = useState(false);

    const [info, setInfo] = useState({
        name: '',
        email: '',
        service: '',
        type: '',
        price: ''
    })
    useEffect(() => {
        if (user) {
            // const newInfo = { ...info };
            setInfo({
                name: user.name,
                email: user.email,
                service: service.category,
                type: service.details.title,
                price: service.details.price
            })
        }

    }, [service.category, service.details.price, service.details.title, user])

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (e) => {
        if (e.target.name === "name") {
            const newInfo = { ...info };
            newInfo.name = e.target.value;
            setInfo(newInfo);
        }
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setLoading(true)

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setLoading(false)
            cogoToast.error('', {
                heading: error.message
            });
        } else {
            axios.post('http://localhost:5000/purchases',
                {
                    name: info.name,
                    email: info.email,
                    service: info.service,
                    type: info.type,
                    price: info.price,
                },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`
                    },
                })
            setLoading(false)
            event.target.reset();
            setpurchased(true);
            cardElement.clear();
            cogoToast.success('', {
                heading: 'Purchased Successfully'
            });
            history.push("/");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-full bg-white p-5 border-2 border-black shadow-md">
            <h1 className="font-RobotoSlab font-bold text-xl mb-3">Purchase Details</h1>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="name" className="font-Signika text-lg">Name:</label>
                <input onChange={handleChange} type="text" name="name" id="name" placeholder="Your name" defaultValue={purchased ? '' : user.name} className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " required />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="email" className="font-Signika text-lg">Email:</label>
                <input type="email" name="email" id="email" placeholder="Your email" defaultValue={purchased ? '' : user.email} disabled={true} className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " required />
            </div>
            {/* <div className="text-left flex flex-col mb-2">
                <label htmlFor="service" className="font-Signika text-lg">Service:</label>
                <input type="text" id="service" placeholder="Service name" className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " />
            </div> */}
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="price" className="font-Signika text-lg">Price:</label>
                <input type="number" name="price" id="price" placeholder="Service price" defaultValue={purchased ? '' : service.details.price} disabled={true} className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " required />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="card" className="font-Signika text-lg">Card Info:</label>
                <CardElement id="card" className="ring-2 rounded-md px-1 py-2" />
            </div>
            <button type="submit" className="px-4 py-3 font-Signika bg-black hover:bg-cs-ebony transition duration-300 text-white rounded-md mt-1" disabled={!stripe}>
                {loading ?
                    <div className="flex justify-center">
                        <Loader
                            type="ThreeDots"
                            color="#ffffff"
                            height={24}
                            width={60}
                        />
                    </div>
                    : "Purchase"
                }
            </button>
        </form>

    );
};

export default PaymentForm;