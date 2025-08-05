import React, { useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const BoardInsertPage = () => {
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
      .then((data) => {
        if (data === '1') {
          alert('게시글 작성 성공');
          navi('/board/list');
        } else {
          alert('게시글 작성 실패');
        }
      });
  }
  function handleChange(evt) {
    setVo({
      ...vo,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <>
      <Header />
      <h2>BoardInsert</h2>
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
          placeholder="CONTETN"
          value={vo.content}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'게시글 작성'} />
      </form>
      <Footer />
    </>
  );
};

export default BoardInsertPage;
