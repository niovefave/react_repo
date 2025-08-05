import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
const BoardListPage = () => {
  const [voList, setVoList] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/board')
      .then((resp) => resp.json())
      .then((vo) => {
        setVoList(vo);
      });
  }, []);

  const navi = useNavigate();
  return (
    <>
      <Header />
      <h2>BoardList</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>작성일시</th>
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
      <button
        onClick={() => {
          navi('/board/insert');
        }}
      >
        게시글 작성
      </button>
      <Footer />
    </>
  );
};

export default BoardListPage;
