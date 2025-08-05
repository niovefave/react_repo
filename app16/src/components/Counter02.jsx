import { minus, plus } from '../redux/counter/counterSlice02';
import { useDispatch, useSelector } from 'react-redux';

const Counter02 = () => {
  const cnt = useSelector((state) => state.counter.cnt);
  const dispatch = useDispatch();

  return (
    <>
      <h2>COUNTER</h2>
      <h3>CNT : {cnt}</h3>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        minus
      </button>
    </>
  );
};

export default Counter02;
