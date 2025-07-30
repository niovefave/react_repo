import React, { useState } from 'react';

const BoardMainPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');
  const [voList, setVoList] = useState([]);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const vo = { title, content, writer, category };
    const str = localStorage.getItem('voList');
    const voList = str ? JSON.parse(str) : [];
    voList.push(vo);
    localStorage.setItem('voList', JSON.stringify(voList));
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
  //게시글 불러오기
  function showBoardList() {
    const str = localStorage.getItem('voList');
    setVoList(JSON.parse(str));
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
      <button onClick={showBoardList}>SHOW BOARD LIST</button>
      <table border={1}>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>WRITER</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => (
            <tr>
              <td>{vo.title}</td>
              <td>{vo.content}</td>
              <td>{vo.writer}</td>
              <td>{vo.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BoardMainPage;
