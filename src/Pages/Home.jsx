import React from 'react';
import Header from '../Component/Header';
import About from '../Component/About';
import Category from './Category';
import Listen from './Listen';
import Benefits from './Benefits';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Category></Category>
            <Listen></Listen>
            <Benefits></Benefits>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;