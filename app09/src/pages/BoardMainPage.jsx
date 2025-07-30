import React, { useState } from 'react';

const BoardMainPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');

  function handleFormSubmit(evt) {
    evt.preventDefault();
  }

  function handleOnChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleOnChangeContent(evt) {
    setContent(evt.target.value);
  }
  function handleOnChangeWriter(evt) {
    setWriter(evt.target.value);
  }
  function handleOnChangeCategory(evt) {
    setCategory(evt.target.value);
  }

  return (
    <>
      <h2>BOARD</h2>

      <h3>BOARD INSERT</h3>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          onChange={handleOnChangeTitle}
        />
        <br />
        <textarea
          name="content"
          placeholder="CONTENT"
          onChange={handleOnChangeContent}
        ></textarea>
        <br />
        <input
          type="text"
          name="writer"
          placeholder="WRITER"
          onChange={handleOnChangeWriter}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="CATEGORY"
          onChange={handleOnChangeCategory}
        />
        <br />
        <input type="submit" value={'게시글 작성'} />
      </form>

      <hr />
      <h3>BOARD LIST</h3>
    </>
  );
};

export default BoardMainPage;
