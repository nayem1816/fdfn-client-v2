import React from 'react';
import aboutUs2 from '../../../assets/images/about-us2.png';

const AboutFdfn = () => {
    return (
        <div className="row d-flex align-items-center my-4">
            <div className="col md-6">
                <h2 style={{ fontSize: '48px' }} className="">
                    Why <span className="text-red">FDFN</span> Different From
                    Others
                </h2>
                <p className="text-justify">
                    FDFN has built it’s widely network utilizing by its licensed
                    spectrum from BTRC. Its network today is based on fiber
                    optics and point to point radio connection technology to
                    serve many of large corporate companies and Small and Medium
                    Enterprises.. FDFN offers a complete range of connectivity &
                    system integration solutions/services such as High Speed
                    Internet, Bandwidth on Demand, Data Storage & Security.
                </p>
            </div>
            <div className="col md-6">
                <img className="img-fluid" src={aboutUs2} alt="#" />
            </div>
        </div>
    );
};

export default AboutFdfn;
