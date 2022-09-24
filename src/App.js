import React, { Component, useState } from 'react';
import Scene from './Scene';

// class App extends Component {

import text from './data/inputs/00.txt'; // Relative path to your File


function App() {

  const [inputs, setInputs] = useState('00');
  const [outputs, setOutputs] = useState('00');



  const updateTestData = (e) => {


    const a = e.target.value


    fetch(`./data/inputs/${a}.txt`)
      .then(r => r.text())
      .then(text => {
        console.log('text decoded:', text);


        // remove the comments from txt data
        const withoutComments = text.replace(/^#.*\n?/gm, '');


        console.log("widhout comments", withoutComments)



        
        // format all satalites
        const sats = withoutComments.replace(/^user.*\n?/gm, '');

        // format all users
        const users = withoutComments.replace(/^sat.*\n?/gm, '');



        console.log("here are the sats", sats)
        console.log("here are the users", users)


      });




  }

  // render() {
  return (
    <div>
      <select onChange={updateTestData}>
        <option value='00'>00</option>
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </select>
      <Scene testCase={inputs} />
    </div>
  );
}
// }

export default App;
