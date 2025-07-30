import React, { useState } from 'react';

const TodoPage = () => {
  const [value, setValue] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    localStorage.setItem('todo', value);
    alert('등록 완료');
  }

  return (
    <>
      <h2>Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할일을 입력하세요."
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={() => {}}>등록</button>
      </form>
      <button
        onClick={() => {
          alert(localStorage.getItem('todo'));
        }}
      >
        할일 조회
      </button>
    </>
  );
};

export default TodoPage;
