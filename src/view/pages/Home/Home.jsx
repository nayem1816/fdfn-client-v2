import React from 'react';
import ExtraFeatures from '../../components/Home/ExtraFeatures/ExtraFeatures';
import HomeBanner from '../../components/Home/HomeBanner/HomeBanner';
import HomeContact from '../../components/Home/HomeContact/HomeContact';
import HomePackages from '../../components/Home/HomePackages/HomePackages';
import WhyFdfn from '../../components/Home/WhyFdfn/WhyFdfn';
import AboutFdfn from './../../components/Home/AboutFdfn/AboutFdfn';
import OurServices from './../../components/Home/OurServices/OurServices';
import Testimonial from './../../components/Home/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <WhyFdfn />
            <HomePackages />
            <ExtraFeatures />
            <AboutFdfn />
            <OurServices />
            <Testimonial />
            <HomeContact />
        </div>
    );
};

export default Home;
