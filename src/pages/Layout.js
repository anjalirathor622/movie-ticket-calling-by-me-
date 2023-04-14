import React from 'react'
//, { useContext, useEffect, useState } 
import { Link, Outlet } from 'react-router-dom'
//import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
//import { URL } from '../helper/helper';
//import { MovieContext } from '../App';

export default function Layout() {
    //2.1
    //const initialMovies = useContext(MovieContext)
    

    //2.3
    return (
        <>
            
            {/* <div className="preloader">
                <div className="preloader-inner">
                <div className="preloader-icon">
                    <span />
                    <span />
                </div>
                </div>
            </div>
            
            <div className="overlay" /> */}
            
            <Link to="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </Link>
           
           <Header />

            <Outlet />

            <Footer />
        </>
    )
}
