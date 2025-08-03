import React, { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
  justify-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.08);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.08);
  }
`;

const BoardInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    const vo = { title, content };
    const str = localStorage.getItem('voList');
    const voList = str ? JSON.parse(str) : [];
    voList.push(vo);
    localStorage.setItem('voList', JSON.stringify(voList));
    alert('작성완료');
    setTitle('');
    setContent('');
  }

  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleChangeContent(evt) {
    setContent(evt.target.value);
  }

  return (
    <Wrap>
      <Title>BOARD INSERT</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="TITLE"
          value={title}
          onChange={handleChangeTitle}
        />
        <Textarea
          name="content"
          placeholder="CONTENT"
          value={content}
          onChange={handleChangeContent}
        ></Textarea>
        <Input type="submit" value={'게시글 작성'} />
      </Form>
    </Wrap>
  );
};

export default BoardInsert;
