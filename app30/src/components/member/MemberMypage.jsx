import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/memberSlice';

const LayoutDiv = styled('div')``;

const MemberMypage = () => {
  const dispatch = useDispatch();
  const { loginMember } = useSelector((state) => {
    return state.member;
  });
  if (!loginMember?.userId) {
    return (
      <>
        <div></div>
        <h1>로그인후 마이페이지 접속 가능합니다.</h1>
        <div></div>
        <h1>
          <Link to={'/member/join'}>회원가입</Link>
        </h1>
        <div></div>
        <h1>
          <Link to={'/member/login'}>로그인</Link>
        </h1>
      </>
    );
  }

  return (
    <LayoutDiv>
      MY PAGE
      <h5>USER_NO : {loginMember.no}</h5>
      <h5>USER_ID : {loginMember.userId}</h5>
      <h5>USER_PWD : {loginMember.userPwd}</h5>
      <h5>USER_NICK : {loginMember.userNick}</h5>
      <button>
        <h3
          onClick={() => {
            dispatch(logout());
          }}
        >
          나가아
        </h3>
      </button>
    </LayoutDiv>
  );
};

export default MemberMypage;
