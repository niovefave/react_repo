import React from 'react';

const BoardList = () => {
  return (
    <>
      <h1>BOARD</h1>
      <h3>LIST</h3>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TEST TITLE</td>
            <td>TEST CONTENT</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
