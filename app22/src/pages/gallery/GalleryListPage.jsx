import React from 'react';
import Header from '../../componentes/common/Header';
import Footer from '../../componentes/common/Footer';
import GalleryList from '../../componentes/gallery/GalleryList';

const GalleryListPage = () => {
  return (
    <>
      <Header />
      <GalleryList />
      <Footer />
    </>
  );
};

export default GalleryListPage;
