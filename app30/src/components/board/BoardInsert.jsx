import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useFormData from '../../hooks/useFormData';
import useFetchPost from '../../hooks/useFetchPost';

const BoardInsert = () => {
  const initState = { title: '', content: '' };
  const { formData, handleChange } = useFormData(initState);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const url = 'http://127.0.0.1:8080/api/board';
    const resp = await useFetchPost(url, formData);
    const statusCode = resp.status;
    if (statusCode == 200) {
      alert('게시글 등록 성공');
    }
  }

  return (
    <div>
      <h1>BOARD_INSERT</h1>
      <hr />
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
    </div>
  );
};

export default BoardInsert;
