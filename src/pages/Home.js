import React from 'react';
import Navbar from "../components/Navbar";
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <nav>
                <div className='navigation d-flex justify-content-around'>
                    <Navbar/>
                </div>
                <Menu/>
            </nav>
            <Header/>
            <Footer/>
        </>
    );
};

export default Home;