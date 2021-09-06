import React, { memo } from 'react';

const ShowIncrement = memo(({ increment }: { increment: Function }) => {
  console.log('Me volví a generar')
  return (
    <button
      className={"btn-outline"}
      onClick={ () => { increment( 5 ) } }>
      Increment
    </button>
  );
});

export default ShowIncrement;
