import React from 'react';
import Header from '../componentes/common/Header';
import Footer from '../componentes/common/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
