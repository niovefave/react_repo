import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardInsert = () => {
  const [vo, setVo] = useState({});
  const navi = useNavigate();
  function handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://127.0.0.1:8080/api/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    })
      .then((resp) => resp.text())
      .then((vo) => {
        if (vo == 1) {
          alert('게시글 작성 성공');
          navi('/board/list');
        } else {
          alert('게시글 작성 실패');
        }
      });
  }
  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value });
  }
  return (
    <>
      <h3>BOARD INSERT</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={vo.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="CONTENT"
          value={vo.content}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'작성'} />
      </form>
    </>
  );
};

export default BoardInsert;
