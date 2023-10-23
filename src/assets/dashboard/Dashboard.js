import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './style.css'
import LeftMenu from '../menu/LeftMenu';
import Header from '../menu/Header';
import ReportTable from './utils/ReportTable';

function Dashboard() {
  const token = localStorage.getItem('token');

  if (!token) {
    // If token is not present, redirect to the login page
    return <Navigate to="/" />;
  }

  return (
    <div className="dashboard-container">
      <ProSidebarProvider>
        <LeftMenu />
        
      </ProSidebarProvider>
      <div className="main-content">
      <Header/>
        <ReportTable />
      </div>
    </div>
  );
}

export default Dashboard;
