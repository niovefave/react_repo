import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { loginMember } = useSelector((state) => {
    return state.member;
  });

  return (
    <div>
      <h1>HOME</h1>

      <h2>{loginMember.userNick}</h2>
    </div>
  );
};

export default Home;
