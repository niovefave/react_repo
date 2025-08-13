import { styled } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardInsert from '../board/BoardInsert';
import BoardList from '../board/BoardList';
import NoticeInsert from '../notice/NoticeInsert';
import NoticeList from '../notice/NoticeList';
import MemberMypage from '../member/MemberMypage';
import MemberLayout from '../member/MemberLayout';
import MemberJoin from '../member/MemberJoin';
import MemberLogin from '../member/MemberLogin';
import Home from '../Home';
const LayoutMain = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.palette.kh.main};
  color: ${({ theme }) => theme.palette.kh.contrastText};
`;

const Main = () => {
  return (
    <LayoutMain>
      <Routes>
        <Route path="/board/insert" element={<BoardInsert />} />
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/notice/insert" element={<NoticeInsert />} />
        <Route path="/notice/list" element={<NoticeList />} />
        <Route path="/member" element={<MemberLayout />}>
          <Route path="join" element={<MemberJoin />} />
          <Route path="login" element={<MemberLogin />} />
          <Route path="mypage" element={<MemberMypage />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </LayoutMain>
  );
};

export default Main;
