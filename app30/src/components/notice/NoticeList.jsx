import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import MyModal from '../util/MyModal';
import useModal from '../../hooks/useModal';

const StyledDiv = styled('div')`
  width: 70%;
  height: 70%;
  border: 2px solid black;
  background-color: lightgray;
  color: orange;
  table {
    width: 100%;
  }
`;

const ModalLayoutDiv = styled('div')`
  display: grid;
  background-color: aliceblue;
  width: 85%;
  height: 85%;
  padding: 10px 30px;
  border-radius: 5px;
  grid-template-rows: 100px 1fr;
  grid-template-columns: repeat(3, 1fr);
  place-items: center center;
  & > h1:nth-child(4) {
    grid-column: span 3;
    place-self: start start;
  }
`;

const NoticeList = () => {
  const url = 'http://127.0.0.1:8080/api/notice';
  const option = {};
  const initState = [];
  const { data: voList, isLoading } = useFetch(url, option, initState);
  const { isOpen, closeModal, openModal } = useModal();
  const [modalVo, setModalVo] = useState({});

  function getNoticeByNo(vo) {
    fetch(`http://127.0.0.1:8080/api/notice/${vo.no}`)
      .then((resp) => resp.json())
      .then((data) => {
        openModal();
        setModalVo(vo);
      });
  }

  return (
    <>
      <StyledDiv>
        <h1 align="center">NOTICE</h1>
        {isLoading ? (
          <div>
            <div className="jelly-box"></div>
            <div className="jelly-box-shadow"></div>
          </div>
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>NO</th>
                <th>TITLE</th>
                <th>HIT</th>
              </tr>
            </thead>
            <tbody>
              {voList.map((vo, idx) => (
                <tr
                  onClick={() => {
                    getNoticeByNo(vo);
                  }}
                >
                  <td>{vo.no}</td>
                  <td>{vo.title}</td>
                  <td>{vo.hit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Link to={'/notice/insert'}>공지사항 작성</Link>
      </StyledDiv>
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <ModalLayoutDiv>
          <h1>NO : {modalVo.no}</h1>
          <h1>TITLE : {modalVo.title}</h1>
          <h1>HIT : {modalVo.hit}</h1>
          <h1>CONTENT : {modalVo.content}</h1>
        </ModalLayoutDiv>
      </MyModal>
    </>
  );
};

export default NoticeList;
