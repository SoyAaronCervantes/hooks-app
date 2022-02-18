import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import CounterWithHook from './components/01-useState/CounterWithHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWithHook from './components/02-useEffect/FormWithHook';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import RealExampleRef from './components/04-useRef/RealExampleUseRef';
// import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
// import Memorize from './components/06-memos/memorize';
// import MemoHook from './components/06-memos/MemoHook';
// import CallbackHook from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import TodoApp from './components/08-useReducer/TodoApp';
import MainApp from './components/09-useContext/MainApp';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);
