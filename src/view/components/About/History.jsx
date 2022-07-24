import React from 'react';
import history from '../../../assets/images/history.png';

const History = () => {
    return (
        <div className="row d-flex align-items-center my-4">
            <div className="col md-6">
                <img className="img-fluid" src={history} alt="#" />
            </div>
            <div className="col md-6">
                <h2 style={{ fontSize: '48px' }} className="">
                    History
                </h2>
                <p className="text-justify">
                    Founded in 2016 as a Bangladesh’s certified premier Internet
                    Service Provider (ISP), FDFN is a commercial Internet
                    service provider (ISP) for the modern development society.
                    The year that followed FDFN played a major role in building
                    Internet infrastructure, earning the company a well
                    reputation for fast, stable Internet access and innovative
                    Internet solutions for both individual and corporate
                    customers.{' '}
                </p>
            </div>
        </div>
    );
};

export default History;
