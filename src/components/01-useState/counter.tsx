import React from 'react';

const CounterApp = () => {
  return (
    <div className={" [ p-9 ] "}>
      <h1 className={"[ text-3xl ]"}>Counter -{ 0 }</h1>
      <hr />
      <button className={ "[ m-5 ] [ px-7 py-1 ] [ text-xl ] [ bg-blue-500 hover:bg-blue-600 text-white ] [ rounded-md ]" }>+1 </button>
    </div>
  );
};

export default CounterApp;
