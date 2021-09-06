import React, { memo } from 'react';

const Small = memo(({ value }: { value: number }) => {
  console.log( 'Me volví a llamar :\'(' )
  return (
    <small>{ value }</small>
  );
});
export default Small;
