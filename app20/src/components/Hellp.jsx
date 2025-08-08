import React from 'react';

const Hellp = React.memo((props) => {
  console.log('Hello');
  console.log(props);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
});

export default Hellp;
