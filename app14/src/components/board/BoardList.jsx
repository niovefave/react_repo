import React, { useEffect, useState } from 'react';

const BoardList = () => {
  console.log('boardList render');

  const [voList, setVoList] = useState([]);

  function f01() {
    fetch(`http://127.0.0.1:8080/api/board`)
      .then((resp) => resp.json())
      .then((data) => {
        setVoList(data);
      });
  }

  useEffect(f01, []);

  // function getBoardList() {
  //   const vo01 = { title: 't01', content: 'c01' };
  //   const vo02 = { title: 't02', content: 'c02' };
  //   const vo03 = { title: 't03', content: 'c03' };

  //   voList.push(vo01);
  //   voList.push(vo02);
  //   voList.push(vo03);

  //   setVoList([...voList]);
  //   console.log(voList);
  // }

  return (
    <>
      <h1>BoardList</h1>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
