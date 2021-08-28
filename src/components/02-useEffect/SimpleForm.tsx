import React, { useEffect, useState } from 'react';

const SimpleForm = () => {
  const [ state, setState ] = useState({
    name: '',
    email: ''
  });

  useEffect( () => {
    console.log( 'Hey!' )
  });

  const { name, email } = state

  return (
    <div className={"[ p-9 ]"}>
      <h1 className={"[ text-3xl ]"}>useEffect</h1>
      <hr/>
      <form>

      </form>
    </div>
  );
};

export default SimpleForm;

