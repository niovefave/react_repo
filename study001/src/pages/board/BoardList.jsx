import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  const [voList, setVoList] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/board')
      .then((resp) => resp.json())
      .then((vo) => {
        setVoList(vo);
      });
  });

  return (
    <>
      <h3>BOARD LIST</h3>

      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              <tr>
                <td>{vo.no}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
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
    </>
  );
};

export default BoardList;
