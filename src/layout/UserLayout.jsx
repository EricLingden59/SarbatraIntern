import React from 'react'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const UserLayout = () => {
  return (
    <div>
        <NavBar />
        <div>
            <Outlet />
        </div>
          <Footer />
    </div>
  )
}

export default UserLayout