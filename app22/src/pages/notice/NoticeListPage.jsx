import React from 'react';
import Header from '../../componentes/common/Header';
import Footer from '../../componentes/common/Footer';
import NoticeList from '../../componentes/notice/NoticeList';

const NoticeListPage = () => {
  return (
    <>
      <Header />
      <NoticeList />
      <Footer />
    </>
  );
};

export default NoticeListPage;
