import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const BoardListPage = () => {
  const [voList, setVoList] = useState([]);

  useEffect(() => {
    fetch('http://192.168.20.213:8080/api/board')
      .then((resp) => resp.json())
      .then((data) => {
        setVoList(data);
      });
  }, []);

  return (
    <>
      <h2>BOARD_LIST</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>CREATE_AT</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => (
            <tr key={vo.no}>
              <td>{vo.no}</td>
              <td>{vo.title}</td>
              <td>{vo.content}</td>
              <td>{vo.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BoardListPage;
