import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

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
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            console.log('submitted');
        }
    };

    return (

        <form onSubmit={handleSubmit} className="max-w-sm w-full bg-white p-5 border-2 border-black shadow-md">
            <h1 className="font-RobotoSlab font-bold text-xl mb-3">Purchase Details</h1>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="name" className="font-Signika text-lg">Name:</label>
                <input type="text" id="name" placeholder="Your name" className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="email" className="font-Signika text-lg">Email:</label>
                <input type="email" id="email" placeholder="Your email" className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="service" className="font-Signika text-lg">Service:</label>
                <input type="text" id="service" placeholder="Service name" className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="price" className="font-Signika text-lg">Price:</label>
                <input type="number" id="price" placeholder="Service price" className="font-Signika outline-none border border-black ring-gray-800 focus:border-opacity-0 focus:ring-2 transition duration-300 px-1.5 py-1 rounded-md " />
            </div>
            <div className="text-left flex flex-col mb-2">
                <label htmlFor="card" className="font-Signika text-lg">Card Info:</label>
                <CardElement id="card" className="ring-2 rounded-md px-1 py-2" />
            </div>
            <button type="submit" className="px-4 py-3 font-Signika bg-black hover:bg-cs-ebony transition duration-300 text-white rounded-md mt-1" disabled={!stripe}>
                Purchase
            </button>
        </form>

    );
};

export default PaymentForm;