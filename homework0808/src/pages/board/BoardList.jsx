import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  const [boardVoList, setBoardVoList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const str = localStorage.getItem('boardVoList');
    if (str) {
      setBoardVoList(JSON.parse(str));
    }
  }, []);

  const handleDetail = (idx) => {
    navigate(`/board/detail/${idx}`);
  };

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {boardVoList.length === 0 ? (
            <tr>
              <td colSpan={3}>작성된 게시글이 없습니다.</td>
            </tr>
          ) : (
            boardVoList.map((vo, idx) => (
              <tr onClick={() => handleDetail(idx)}>
                <td>{idx + 1}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
