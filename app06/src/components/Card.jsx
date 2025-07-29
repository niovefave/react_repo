import styled from 'styled-components';

const CardDiv = styled.div`
  width: 70px;
  height: 100px;
  border: 2px solid black;
  border-radius: 5px;
`;

const Card = ({ a, b }) => {
  return (
    <CardDiv>
      <span>{a}</span>
      <br />
      <span>{b}</span>
    </CardDiv>
  );
};

export default Card;
