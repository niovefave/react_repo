import React from 'react';
import Header from '../../componentes/common/Header';
import Footer from '../../componentes/common/Footer';
import BoardList from '../../componentes/board/BoardList';

const BoardListPage = () => {
  return (
    <>
      <>
        <Header />
        <BoardList />
        <Footer />
      </>
    </>
  );
};

export default BoardListPage;
