import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardInsert = () => {
  const [boardVo, setBoardVo] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!boardVo.title.trim()) {
      alert('게시글 작성 실패(제목을 작성해주세요)');
      return;
    } else if (!boardVo.content.trim()) {
      alert('게시글 작성 실패(내용을 작성해주세요)');
      return;
    }

    const str = localStorage.getItem('boardVoList');
    const boardVoList = str ? JSON.parse(str) : [];
    boardVoList.push(boardVo);
    localStorage.setItem('boardVoList', JSON.stringify(boardVoList));
    alert('게시글 작성 완료');
    navigate('/board/list');
  }
  function handleChange(evt) {
    setBoardVo({
      ...boardVo,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <div>
      <h1>BOARD_INSERT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={boardVo.title}
          autoFocus
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="CONTENT"
          value={boardVo.content}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value={'저장'} />
      </form>
    </div>
  );
};

export default BoardInsert;
