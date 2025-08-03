import React, { useState } from 'react';

const BoardInsert = () => {
  function handleSubmit(evt) {
    evt.preventDefault();
    //packet 만들어서 서버에 내기
    useState();

    const vo = {
      title,
      content,
    };
    const url = 'http://127.0.0.1:8080/api/board';
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    };

    fetch(url, option).then().then();
  }

  return (
    <>
      <h1>BOARD INSERT</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="TITLE" />
        <br />
        <textarea name="content" placeholder="CONTENT" />
        <br />
        <input type="submit" value={'insert'} />
      </form>
    </>
  );
};

export default BoardInsert;
