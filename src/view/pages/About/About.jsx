import React from 'react';
import History from '../../components/About/History';
import AboutZone from './../../components/About/AboutZone';
import AboutFdfn from './../../components/About/AboutFdfn';
import Mission from '../../components/About/Mission';

const About = () => {
    return (
        <div className="container">
            <AboutZone />
            <History />
            <AboutFdfn />
            <Mission />
        </div>
    );
};

export default About;
