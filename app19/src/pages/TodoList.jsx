import React from 'react';

const TodoList = () => {
  const str = localStorage.getItem('todo');

  return (
    <>
      <h2>LIST</h2>
      <hr />
      <h2>할일 : {str}</h2>
      <hr />
    </>
  );
};

export default TodoList;
