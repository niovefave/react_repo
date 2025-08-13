import { styled } from '@mui/material/styles';
import ReactDOM from 'react-dom';

import React, { useEffect } from 'react';
const OverlayDiv = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #80808088;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerDiv = styled('div')`
  width: 50%;
  height: 50%;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const MyModal = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    function handleEsc(evt) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    }
    //after render
    window.addEventListener('keydown', handleEsc);
    return () => {
      //after unmount
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <OverlayDiv onClick={closeModal}>
        <ContainerDiv
          onClick={(evt) => {
            evt.stopPropagation();
          }}
        >
          {children}
        </ContainerDiv>
      </OverlayDiv>
    </>,
    document.body
  );
};

export default MyModal;
