import React, { useState } from 'react';

const NoticeMain = () => {
  const [noticeVo, setNoticeVo] = useState({});
  const [storageVoList, setStorageVoList] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();
    let noticeVoList = localStorage.getItem('noticeVoList');
    if (noticeVoList === null) {
      noticeVoList = [];
    } else {
      noticeVoList = JSON.parse(noticeVoList);
    }
    noticeVoList.push(noticeVo);
    localStorage.setItem('noticeVoList', JSON.stringify(noticeVoList));
  }

  function handleFormChange(evt) {
    setNoticeVo({
      ...noticeVo,
      [evt.target.name]: evt.target.value,
    });
  }

  function loadNotice() {
    setStorageVoList(JSON.parse(localStorage.getItem('noticeVoList')));
    console.log(storageVoList);
  }

  return (
    <>
      <h2>NOTICE MAIN</h2>

      <hr />

      <h3>NOTICE INSERT</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleFormChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="content"
          onChange={handleFormChange}
        ></textarea>
        <br />
        <input type="submit" value={'공지사항등록'} />
      </form>
      <hr />

      <h3>NOTICE LIST</h3>
      <button onClick={loadNotice}>LOAD NOTICE</button>

      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
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
export default NoticeMain;
