import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { use } from 'react';

const BookList = () => {
  const [bookVoList, setBookVoList] = useState([]);
  const str = localStorage.getItem('bookVoList');
  useEffect(() => {
    setBookVoList(JSON.parse(str));
  }, []);

  return (
    <div>
      <h1>BOOK_LIST</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {bookVoList.map((vo, idx) => (
            <tr>
              <td>{vo.title}</td>
              <td>{vo.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
