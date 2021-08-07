import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51JJYEpEvHzZ8vXqANLoMuKjhDpA9kJyIlsqRHgks2ZcxsSjFOdnBmgs5GwqY6ozcur6BD9Xu68CRsydd94fQOpmJ00SWNBEAnE');

const BuyPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm></PaymentForm>
        </Elements>
    );
};

export default BuyPayment;