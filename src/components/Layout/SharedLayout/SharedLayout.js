import React from 'react';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
