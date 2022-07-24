import React from 'react';
import ContactBox from '../../components/Contact/ContactBox';
import HomeContact from '../../components/Home/HomeContact/HomeContact';
import ContactText from './../../components/Contact/ContactText';

const Contact = () => {
    return (
        <div className="container">
            <ContactText />
            <ContactBox />
            <HomeContact />
        </div>
    );
};

export default Contact;
