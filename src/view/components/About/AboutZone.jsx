import React from 'react';
import aboutUs1 from '../../../assets/images/about_us.png';

const AboutZone = () => {
    return (
        <div className="row d-flex align-items-center my-4">
            <div className="col md-6">
                <h2 style={{ fontSize: '48px' }} className="">
                    About
                </h2>
                <h2 style={{ fontSize: '48px' }} className="text-red">
                    Friends Digital Fiber Network
                </h2>
            </div>
            <div className="col md-6">
                <img className="img-fluid" src={aboutUs1} alt="#" />
            </div>
        </div>
    );
};

export default AboutZone;
