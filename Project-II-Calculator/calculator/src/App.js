import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Field4 className="4 black 0" width="4" color="black" content="0"/>
      <Field3 className="3 white clear" width="3" color="white" content="clear"/>
      <Field1 classname="1 red /" width="1" color="red" content="/"/>
      <Field1 width="1" color="white" content="7"/>
      <Field1 width="1" color="white" content="8"/>
      <Field1 width="1" color="white" content="9"/>
      <Field1 width="1" color="red" content="*"/>
      <Field1 width="1" color="white" content="4"/>
      <Field1 width="1" color="white" content="5"/>
      <Field1 width="1" color="white" content="6"/>
      <Field1 width="1" color="red" content="-"/>
      <Field1 width="1" color="white" content="1"/>
      <Field1 width="1" color="white" content="2"/>
      <Field1 width="1" color="white" content="3"/>
      <Field1 width="1" color="red" content="+"/>
      <Field3 width="3" color="white" content="0"/>
      <Field1 width="1" color="red" content="="/>
    </div>
  );
};

function Field1(props){
  
  return <div>
  {props.content}
  </div>
}

function Field3(props){
  
  return <div>
  {props.content}
  </div>
}

function Field4(props){
  
  return <div>
  {props.content}
  </div>
}

export default App;
