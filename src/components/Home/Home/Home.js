import React from 'react';
import Navbar from '../../../shared/Navbar';
import Header from '../Header/Header/Header';
import Aboutus from '../Aboutus/Aboutus';
import Services from '../Services/Services/Services';
import Feedback from '../Feedback/Feedback';
import Support from '../Support/Support';
import Footer from '../../../shared/Footer';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Aboutus></Aboutus>
            <div id="services">
                <Services></Services>
            </div>
            <Feedback></Feedback>
            <div id="support">
                <Support></Support>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;