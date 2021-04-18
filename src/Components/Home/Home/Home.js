import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';
import Header from './../Header/Header';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WhyUs></WhyUs>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;