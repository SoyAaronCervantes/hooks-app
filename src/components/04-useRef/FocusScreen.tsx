import React, { useRef } from 'react';
import '../styles.css';

const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    const element: any = document.querySelector('.form-input');
    element.select()
  };

  return (
    <div className="container">
      <h1>Focus Screen</h1>
      <hr/>
      <form className={"[ flex-col gap-5 ]"}>
        <label className={"[ flex flex-col ]"}>
           <input
            ref={ () => inputRef }
            className="form-input"
            type="text"
            placeholder="Write your name"/>
          <span>Ex: Aarón Cervantes</span>
        </label>
        <button onClick={ handleClick }>Focus</button>
      </form>
    </div>
  );
};

export default FocusScreen;
