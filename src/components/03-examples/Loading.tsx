import React from 'react';

const Loading = () => {
  return (
    <div className={ "[ flex ] [ h-full ] [ justify-center items-center ]" }>
      <button
        type="button"
        className={
          "[ flex ]" +
          "[ items-center ]" +
          "[ gap-x-5 ]" +
          "[ px-5 py-2 ]" +
          "[ bg-indigo-700 text-white ]" +
          "[ rounded ]" }>
        <div className={ "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" }/>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
