import React from 'react';
import useFormData from '../../hooks/useFormData';

const MemberJoin = () => {
  const { formData, handleChange, setFormData } = useFormData({});

  function handlSubmit() {
    const url = 'http://127.0.0.1:8080/api/member/join';
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    fetch(url, option).then((resp) => {
      if (resp.status === 200) {
        alert('JOIN 200OK');
        setFormData({ userId: '', userPwd: '', userNick: '' });
      }
    });
  }

  return (
    <>
      <div>ID : </div>
      <div>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
      </div>
      <div>PWD : </div>
      <div>
        <input
          type="password"
          name="userPwd"
          value={formData.userPwd}
          onChange={handleChange}
        />
      </div>
      <div>NICK : </div>
      <div>
        <input
          type="text"
          name="userNick"
          value={formData.userNick}
          onChange={handleChange}
        />
      </div>
      <div></div>
      <div>
        <input type="submit" value={'Join'} onClick={handlSubmit} />
      </div>
    </>
  );
};

export default MemberJoin;
