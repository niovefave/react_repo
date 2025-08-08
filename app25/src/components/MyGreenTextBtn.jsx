import React from 'react';
import MyBtn from './MyBtn';
import MyTypho from '../styles/MyTypho';

const MyGreenTextBtn = ({ children }) => {
  return (
    <MyBtn>
      <MyTypho>{children}</MyTypho>
    </MyBtn>
  );
};

export default MyGreenTextBtn;
