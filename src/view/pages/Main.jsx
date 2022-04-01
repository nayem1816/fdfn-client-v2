import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Skeleton1 from './../components/Common/Skeleton/Skeleton1';
const Home = React.lazy(() => import('./Home/Home'));
const PayBill = React.lazy(() => import('./PayBill/PayBill'));
const Packages = React.lazy(() => import('./Packages/Packages'));
const FtpSite = React.lazy(() => import('./FtpSite/FtpSite'));
const LiveTv = React.lazy(() => import('./LiveTv/LiveTv'));

const Main = () => {
    return (
        <Suspense
            fallback={
                <div>
                    <Skeleton1 />
                </div>
            }
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/payBill" element={<PayBill />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/ftpSite" element={<FtpSite />} />
                <Route path="/liveTv" element={<LiveTv />} />
                <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
        </Suspense>
    );
};

export default Main;
