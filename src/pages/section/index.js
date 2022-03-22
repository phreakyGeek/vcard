import React from 'react'
import AboutSection from './AboutSection';
import Badges from './Badges';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';
import Logo from './Logo';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import TopSection from './TopSection';

import CustomData from './CustonData.json'

export default function index() {
    console.log("3")
    console.log(CustomData.name)

    return (
        <>
        {/* Wrapper Starts */}
        <div className="wrapper">
            <TopSection/> 
            <AboutSection/>
            <Badges/>
            <Portfolio/>
            <Testimonials/>
            <Blogs/>
            <Logo/>
            <Contact/>
            <Footer/>
        </div>
        {/* Wrapper Ends */}
        </>
      );
}
