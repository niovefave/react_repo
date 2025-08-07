import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../redux/board/boardSlice';

const BoardList = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/board')
      .then((resp) => resp.text())
      .then((post) => {
        dispatch(setPost(post));
      });
  }, [dispatch]);

  return (
    <>
      <h2>BOARD_LIST</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {post.map((vo) => (
            <tr>
              <td>{vo.title}</td>
              <td>{vo.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
