import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/board/boardSlice';

const BoardInsert = () => {
  const dispatch = useDispatch();

  const [vo, setVo] = useState({
    title: '',
    content: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();

    fetch('http://127.0.0.1:8080/api/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    })
      .then((resp) => resp.json())
      .then((vo) => {
        dispatch(addPost(vo));
        setVo({ title: '', content: '' });
        alert('게시글 작성 성공');
      });
  }
  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value });
  }
  return (
    <>
      <h2>BOARD_INSERT</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="CONTENT"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'게시글 작성'} />
      </form>
    </>
  );
};

export default BoardInsert;
