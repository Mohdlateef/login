import logo from './logo.svg';
import React ,{useState}from 'react';
import Form from './Components/Form';
import Displaydata from './Components/Displaydata';
import './App.css';

function App() {
let [userData,setUserData]=useState("");

  return (
    <div>
<Form setUserData={setUserData}/>
<Displaydata userData={userData}/>
    </div>
  );
}

export default App;
