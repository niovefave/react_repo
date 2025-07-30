import React, { useState } from 'react';

const BoardPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    const boardVo = { title, content };
    let dbVoList = localStorage.getItem('boardVoList');
    if (dbVoList === null) {
      dbVoList = [];
    } else {
      dbVoList = JSON.parse(dbVoList);
    }
    const boardVoList = dbVoList;
    boardVoList.push(boardVo);
    localStorage.setItem('boardVoList', JSON.stringify(boardVoList));
  }

  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleChangeContent(evt) {
    setContent(evt.target.value);
  }

  const [storageVoList, setStorageVoList] = useState([]);

  return (
    <>
      <hr />
      <h2>Board</h2>
      <h3>게시글 등록</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="제목"
          onChange={handleChangeTitle}
        />
        <br />
        <textarea
          name="content"
          value={content}
          placeholder="내용"
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <input type="submit" value={'저장'} />
      </form>
      <hr />
      <h3>게시글 조회</h3>

      <button
        onClick={() => {
          setStorageVoList(JSON.parse(localStorage.getItem('boardVoList')));
        }}
      >
        조회하기
      </button>

      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {storageVoList.map((vo, idx) => {
            return (
              <tr>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BoardPage;
