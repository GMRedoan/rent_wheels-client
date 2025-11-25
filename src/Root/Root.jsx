import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;