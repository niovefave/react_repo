import React, { useState } from 'react';

const Board = () => {
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
  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleChangeContent(evt) {
    setContent(evt.target.value);
  }
  function handleChangeWriter(evt) {
    setWriter(evt.target.value);
  }
  function handleChangeCategory(evt) {
    setCategory(evt.target.value);
  }
  function selectBoard() {
    const str = localStorage.getItem('voList');
    setVoList(JSON.parse(str));
  }

  return (
    <>
      <h3>BOARD</h3>

      <hr />
      <h4>BOARD INSERT</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          onChange={handleChangeTitle}
        />
        <br />
        <textarea
          name="content"
          placeholder="CONTENT"
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <input
          type="text"
          name="writer"
          placeholder="WRITER"
          onChange={handleChangeWriter}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="CATEGORY"
          onChange={handleChangeCategory}
        />
        <br />
        <input type="submit" value={'게시글 작성'} />
      </form>
      <hr />

      <h4>BOARD LIST</h4>
      <button onClick={selectBoard}>게시글 조회</button>
      <table border={1}>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>WRITER</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
                <td>{vo.writer}</td>
                <td>{vo.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Board;
