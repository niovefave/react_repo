import React, { useState } from 'react';
import axios from 'axios';

function MyControlledForm() {
  const [form, setForm] = useState({
    name: '홍길동',
    age: 30,
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // JSON 전송 예시
    const jsonData = { name: form.name, age: form.age };
    try {
      await axios.post('/api/submit-json', jsonData);
      // 파일 전송이 필요하면 FormData로 변환해서 전송
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="avatar">프로필 사진</label>
        <input id="avatar" type="file" onChange={handleChange} />
      </div>
      <button type="submit">전송</button>
    </form>
  );
}

export default MyControlledForm;
