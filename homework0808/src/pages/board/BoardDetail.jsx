import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('boardVoList'));
    const boardIndex = parseInt(id);

    setBoard(list[boardIndex]);
  }, [id, navigate]);

  const deleteBoard = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const list = JSON.parse(localStorage.getItem('boardVoList'));
      const boardIndex = parseInt(id);
      list.splice(boardIndex, 1);
      localStorage.setItem('boardVoList', JSON.stringify(list));
      alert('삭제 완료');
      navigate('/board/list');
    }
  };

  if (!board) {
    return (
      <div>
        <h1>게시글을 찾을 수 없습니다</h1>
        <button onClick={() => navigate('/board/list')}>
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>상세조회</h1>
      <button onClick={() => navigate('/board/list')}>목록</button>
      <button onClick={deleteBoard}>삭제</button>

      <table border={1}>
        <tbody>
          <tr>
            <th>제목</th>
            <td>{board.title}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>{board.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardDetail;
