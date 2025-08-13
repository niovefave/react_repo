import React from 'react';
import { useState } from 'react';

const BoardInsertPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://192.168.20.213:8080/api/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }
  return (
    <>
      <h2>BOARD_INSERT</h2>
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
          name="content"
          placeholder="CONTENT"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'ENROLL'} />
      </form>
    </>
  );
};

export default BoardInsertPage;
