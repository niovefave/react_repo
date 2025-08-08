import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: white;
  border-top: solid 1px black;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>FOOTER</h1>
    </StyledFooter>
  );
};

export default Footer;
