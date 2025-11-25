import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;