import React, { Children } from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const MainLayout = ({ children }) => {
  return <LayoutDiv>{children}</LayoutDiv>;
};

export default MainLayout;
