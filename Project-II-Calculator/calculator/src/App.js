import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Field className="4 black 0"width="4" color="black" content="0"/>
      <Field className="3 white clear"width="3" color="white" content="clear"/>
      <Field classname="1 red /"width="1" color="red" content="/"/>
      <Field width="1" color="white" content="7"/>
      <Field width="1" color="white" content="8"/>
      <Field width="1" color="white" content="9"/>
      <Field width="1" color="red" content="*"/>
      <Field width="1" color="white" content="4"/>
      <Field width="1" color="white" content="5"/>
      <Field width="1" color="white" content="4"/>
      <Field width="1" color="red" content="-"/>
      <Field width="1" color="white" content="4"/>
      <Field width="1" color="white" content="4"/>
      <Field width="1" color="white" content="4"/>
      <Field width="1" color="red" content="+"/>
      <Field width="2" color="white" content="4"/>
      <Field width="1" color="red" content="="/>
    </div>
  );
};

function Field(width, color, content){
  const style ={
    style.width : (25*width)%
    style.color: color;
  }
  return <div>{content}</div>
}

export default App;
