import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 860px;
  margin: 24px auto;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.3px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
`;

const Thead = styled.thead`
  background: #f9fafb;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 14px;
  font-weight: 700;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
`;

const Tr = styled.tr`
  &:nth-child(even) td {
    background: #fbfbfb;
  }
  &:hover td {
    background: #f3f4f6;
  }
`;

const Td = styled.td`
  padding: 12px 14px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
`;

const BoardList = () => {
  const [voList, setVoList] = useState([]);

  function selectBoard() {
    const str = localStorage.getItem('voList');
    setVoList(JSON.parse(str));
  }
  useEffect(() => {
    selectBoard();
  }, []);
  return (
    <Wrap>
      <Title>BOARD LIST</Title>
      <Table border={1}>
        <Thead>
          <Tr>
            <Th style={{ width: 80 }}>순번</Th>
            <Th style={{ width: 240 }}>제목</Th>
            <Th>내용</Th>
          </Tr>
        </Thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              <Tr>
                <Td>{idx + 1}</Td>
                <Td>{vo.title}</Td>
                <Td>{vo.content}</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrap>
  );
};

export default BoardList;
