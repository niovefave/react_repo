import React from 'react';

const TodoInsert = () => {
  let str = '';
  function enrollTodo(evt) {
    evt.preventDefault();
    localStorage.setItem('todo', str);
  }

  function handleChange(evt) {
    str = evt.target.value;
  }

  return (
    <>
      <h2>INSERT</h2>

      <form onSubmit={enrollTodo}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          onChange={handleChange}
        />
        <input type="submit" value={'작성'} />
      </form>
    </>
  );
};

export default TodoInsert;
