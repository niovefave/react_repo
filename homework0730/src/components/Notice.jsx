import React, { useState } from 'react';

const Notice = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [voList, setVoList] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const vo = { title, content };
    const str = localStorage.getItem('voList');
    const voList = str ? JSON.parse(str) : [];
    voList.push(vo);
    localStorage.setItem('voList', JSON.stringify(voList));
  }
  function changeTitle(evt) {
    setTitle(evt.target.value);
  }
  function changeContent(evt) {
    setContent(evt.target.value);
  }

  function showList() {
    const str = localStorage.getItem('voList');
    setVoList(JSON.parse(str));
  }

  return (
    <>
      <h3>NOTICE</h3>

      <h4>NOTICE INSERT</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          onChange={changeTitle}
        />
        <input
          type="text"
          name="title"
          placeholder="CONTENT"
          onChange={changeContent}
        />
        <input type="submit" value={'등록'} />
      </form>

      <hr />
      <h4>NOTICE LIST</h4>
      <button onClick={showList}>등록</button>
      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>타이틀</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            <tr>
              <td>{idx + 1}</td>
              <td>{vo.title}</td>
              <td>{vo.content}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Notice;
