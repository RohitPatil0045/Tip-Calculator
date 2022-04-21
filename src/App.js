import React, { useState } from 'react'
import './App.css';
import Tip from './Components/Tip';



function App() {
  const [customername, setCustomerName] = useState([
  ])
  const [totaltip, setTip] = useState([
    0
  ])
  const AddCustomerName = (link) => {
    setCustomerName([...customername, link])
  }
  const AddTip = (link) => {
    setTip([...totaltip, link])
  }

  return (
    <>
    <Tip customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip}/>
    </>
  );
}

export default App;
