import React from 'react';

const NoticeInsert = () => {
  return (
    <>
      <h1>NOTICE</h1>
      <h3>INSERT</h3>
      <form>
        <label>TITLE</label>
        <input type="text" />
        <br />
        <label>CONTENT</label>
        <textarea></textarea>
        <br />
        <input type="submit" value={'Save'} />
      </form>
    </>
  );
};

export default NoticeInsert;
