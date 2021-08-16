import React from 'react';
import Sidebar from '../../../shared/Sidebar';
import DashboardItem from './DashboardItem';

const Dashboard = () => {
    return (
        <div className="2xl:container">
            <div className="flex flex-col md:flex-row gap-y-10">
                <div className="p-5 md:p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="flex-1 px-5 md:px-10 md:mt-5">
                    <h1 className="text-3xl font-Ubuntu font-bold text-center mb-1">Your Dashboard</h1>
                    <hr className="mb-8" />
                    <DashboardItem></DashboardItem>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;