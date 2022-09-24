import React, { Component, useEffect, useState } from 'react';
import Scene from './Scene';

// class App extends Component {

import text from './data/inputs/00.txt'; // Relative path to your File
import './style.css'

function App() {

  const [inputs, setInputs] = useState({
    satellites:[],
    users:[],
    interferers:[],
    beams:[]
  });

  const [outputs, setOutputs] = useState('00');
  // const [data_tp, setOutputs] = useState('00');


  const formatBeams = async (e) => {


    console.log("FORMAT BEAMS HERE")
    console.log(e)

let beams = []




let objs = e.split(/\r?\n/); // split at linebreaks, to array
objs.pop() // remove the last element (empty string)
for(let i=0;i<objs.length;i++){

let obj = objs[i]
let obj_to_arr = obj.split(' ') // split the string at ' ' spaces


// console.log(obj_to_arr)


let obj_json = {
    id:obj_to_arr[3], // beam 2
    satellite:obj_to_arr[1], // id of satalite
    user:obj_to_arr[5], // id of user
    color:obj_to_arr[7], // color
    // z:0
  }

beams.push(obj_json)
}




return beams





  }
  const formatData = async (e) => {


    let data  = []

    // console.log('unformatted: ')
    // console.log(e)


        let objs = e.split(/\r?\n/); // split at linebreaks, to array
        objs.pop() // remove the last element (empty string)
for(let i=0;i<objs.length;i++){

  let obj = objs[i]
  let obj_to_arr = obj.split(' ') // split the string at ' ' spaces
  let obj_json = {
      id:parseInt(obj_to_arr[1]),
      x:parseFloat(obj_to_arr[2]),
      y:parseFloat(obj_to_arr[3]),
      z:parseFloat(obj_to_arr[4])
    
  }
  data.push(obj_json)
}


    return data
  }


  const updateTestData =async  (e) => {


    const a = e.target.value


    fetch(`./data/inputs/${a}.txt`)
      .then(r => r.text())
      .then(async text => {
        // console.log('text decoded:', text);


        // remove the comments from txt data
        const withoutComments = text.replace(/^#.*\n?/gm, '').replace(/(^[ \t]*\n)/gm, "");

        // format all satalites
        const sats = withoutComments.replace(/^user.*\n?/gm, '').replace(/^interferer.*\n?/gm, '');

        // format all users
        const users = withoutComments.replace(/^sat.*\n?/gm, '').replace(/^interferer.*\n?/gm, '');

        // format all interferers
        const interferers = withoutComments.replace(/^sat.*\n?/gm, '').replace(/^user.*\n?/gm, '');

        let formated_sats = await formatData(sats)
        let formated_users = await formatData(users)
        let formated_interferers = await formatData(interferers)

        // get the output data (beams)
        fetch(`./data/outputs/${a}.txt`)
      .then(r => r.text())
      .then(async beams => {


        let formated_beams = await formatBeams(beams)


let all_data = {
  satellites:formated_sats,
  users:formated_users,
  interferers :formated_interferers,
  beams:formated_beams
}


console.log('here is all the data')
console.log(all_data)



setInputs(all_data)


      })

      });




  }

  useEffect(()=>{
    // console.log(inputs)
  },setInputs)

  // render() {


  // todo add author data, website url

  // todo check that users and satalites are being inseted in the correct location
  return (
    <div>

      satalites are green
      users are blue
      interferers are red

      <br/>

      Select an option
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
      <Scene
       inputs={inputs ||{satellites:[]}} 
       />
    </div>
  );
}

export default App;