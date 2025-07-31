import React, { useState } from 'react';

const Notice = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noticeList, setNoticeList] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const vo = { title, content };
    const str = localStorage.getItem('noticeList');
    const noticeList = str ? JSON.parse(str) : [];
    noticeList.push(vo);
    localStorage.setItem('noticeList', JSON.stringify(noticeList));
  }
  function changeTitle(evt) {
    setTitle(evt.target.value);
  }
  function changeContent(evt) {
    setContent(evt.target.value);
  }

  function showList() {
    const str = localStorage.getItem('noticeList');
    setNoticeList(JSON.parse(str));
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
        <br />
        <input
          type="text"
          name="content"
          placeholder="CONTENT"
          onChange={changeContent}
        />
        <input type="submit" value={'등록'} />
      </form>

      <hr />
      <h4>NOTICE LIST</h4>
      <button onClick={showList}>조회</button>
      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>타이틀</th>
          </tr>
        </thead>
        <tbody>
          {noticeList.map((notice, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{notice.title}</td>
              <td>{notice.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Notice;
