import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { data, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVoList } from '../redux/BoardSlice';

const BoardList = () => {
  const { voList } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/board')
      .then((resp) => resp.json())
      .then((vo) => {
        dispatch(setVoList(vo));
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <table border={1}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일지</th>
            </tr>
          </thead>
          <tbody>
            {voList.map((vo, idx) => {
              return (
                <tr>
                  <td>{vo.no}</td>
                  <td>{vo.title}</td>
                  <td>{vo.createAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={'/board/insert'}>게시글 작성하기</Link>
      </main>
      <Footer />
    </>
  );
};

export default BoardList;
