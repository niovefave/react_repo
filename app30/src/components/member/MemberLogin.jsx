import React from 'react';
import useFormData from '../../hooks/useFormData';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/memberSlice';

const MemberLogin = () => {
  const { formData, handleChange, setFormData } = useFormData({});
  const dispatch = useDispatch();

  function handlSubmit() {
    const url = 'http://127.0.0.1:8080/api/member/login';
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    fetch(url, option)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        alert('LOGIN 200');
        dispatch(login(data));
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
      <div></div>
      <div>
        <input type="submit" value={'Login'} onClick={handlSubmit} />
      </div>
    </>
  );
};

export default MemberLogin;
