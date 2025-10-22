import React from 'react';
import Header from '../Component/Header';
import About from '../Component/About';
import Category from './Category';
import Listen from './Listen';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Category></Category>
            <Listen></Listen>
        </div>
    );
};

export default Home;