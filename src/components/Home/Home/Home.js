import React from 'react';
import Navbar from '../../../shared/Navbar';
import Header from '../Header/Header/Header';
import Aboutus from '../Aboutus/Aboutus';
import Services from '../Services/Services/Services';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Aboutus></Aboutus>
            <Services></Services>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;