import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
// import Home from './Home1.js';
// import Main from './Main1.jsx';
// import Profile from './profile.js';
// import Profolio from './profolio';
// import Accordions from './accodin/accodin1';
// import Condrend from './condrend/condrend';
// import Table1 from './table/table1';
// import Parent from './propsdrilling/parent';
// import Parent from './user/Parent';
// import Counter from '../src/state/state'
// import Toggle from './toggle/toggle';
// import Form from './toggle/form'
// import Todo from './todo/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><React.StrictMode>
    <App />
    {/* <Home /> */}
    {/* <Main /> */}
    {/* <Profile name="mohan"/> */}
    {/* <Profolio/> */}
    {/* <Accordions /> */}
    {/* <Condrend/> */}
    {/* <Table1 /> */}
    {/* <Parent isLoggedIn="true"/> */}
    {/* <Counter/> */}
    {/* <Toggle/> */}
    {/* <Form /> */}
    {/* <Todo/> */}
      
   </React.StrictMode></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
