import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counterState = useSelector((state) => {
    return state.c;
  });
  console.log(counterState);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter</h2>
      <h3>NUM : {counterState.cnt}</h3>
      <button
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        Minus
      </button>
    </>
  );
};

export default Counter;
