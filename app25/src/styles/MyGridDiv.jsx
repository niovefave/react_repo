import styled from 'styled-components';

const MyGridDiv = styled.div`
  display: grid;
  grid-template-columns: ${({ c }) => {
    return `repeat(${c || 2} , 1fr)`;
  }};
  grid-template-rows: ${({ r }) => {
    return `repeat(${r || 2} , 1fr)`;
  }};
  border: 3px solid blakc;
`;

export default MyGridDiv;
