import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Boardinsert = () => {
  const [vo, setVo] = useState({});

  function handleSubmit(evt) {
    evt.preventDeafult();
    fetch('http://127.0.0.1:8080/api/board', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(vo),
    })
      .then((resp) => resp.text())
      .then((data) => {
        if (data == '1') {
          alert('게시글 작성 성공');
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
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={vo.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용"
          value={vo.content}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'작성'} />
      </form>
      <Footer />
    </>
  );
};

export default Boardinsert;
