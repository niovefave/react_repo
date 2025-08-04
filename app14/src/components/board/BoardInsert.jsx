import React, { useState } from 'react';

const BoardInsert = () => {
  const [vo, setVo] = useState({
    title: '',
    content: '',
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    //packet 만들어서 서버에 내기

    const url = 'http://127.0.0.1:8080/api/board';
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    };

    fetch(url, option);
  }

  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>BOARD INSERT</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={vo.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="CONTENT"
          value={vo.content}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'insert'} />
      </form>
    </>
  );
};

export default BoardInsert;
