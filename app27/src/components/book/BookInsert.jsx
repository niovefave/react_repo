import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookInsert = () => {
  const navi = useNavigate();
  const [bookVo, setBookVo] = useState({
    title: '',
    price: 0,
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    const str = localStorage.getItem('bookVoList');
    const bookVoList = str ? JSON.parse(str) : [];
    bookVoList.push(bookVo);
    localStorage.setItem('bookVoList', JSON.stringify(bookVoList));
    alert('등록완료');
    navi('/book/list');
  }
  function handleChange(evt) {
    setBookVo({ ...bookVo, [evt.target.name]: evt.target.value });
    // bookVo[evt.target.name] = evt.target.value;
    // setBookVo(bookVo);
  }

  return (
    <div>
      <h1>BOOK_INSERT</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="PRICE"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'SAVE'} />
      </form>
    </div>
  );
};

export default BookInsert;
