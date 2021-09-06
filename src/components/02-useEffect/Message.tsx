import React, { useEffect, useState } from 'react';

const Message = () => {
  const [ state, setState ] = useState({ x: 0, y: 0 });
  const { x, y } = state;

  useEffect( () => {
    const mouseMove = ({ x, y }: MouseEvent) => {
      const coords = { x, y };
      setState(coords);
    }

    window.addEventListener('mousemove', mouseMove);

    return () => window.removeEventListener( 'mousemove', mouseMove );
  }, [] );
  
  return (
    <div>
      <h3>Eres genial</h3>
      <p>X: { x }, Y: { y }</p>
    </div>
  );
};

export default Message;
