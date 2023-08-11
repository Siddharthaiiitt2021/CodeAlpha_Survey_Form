import './App.css';
import React, { useState } from 'react';


function App() {
  const [name, SetName] = useState('');
  const [roll, SetRoll] = useState('');
  const [degree, SetDegree] = useState('None');
  const [program, SetProgram] = useState('None');
  const [year, SetYear] = useState(1958);
  const [mobile, SetMobile] = useState('');
  const [father, SetFather] = useState('');
  const [mother, SetMother] = useState('');


  function ChangeName(e) {
    SetName(e.target.value)
  }

  function ChangeRoll(e) {
    SetRoll(e.target.value)
  }

  function ChangeYear(e) {
    SetYear(e.target.value)
  }

  function ChangeMobile(e) {
    SetMobile(e.target.value)
  }

  function ChangeFather(e) {
    SetFather(e.target.value)
  }

  function ChangeMother(e) {
    SetMother(e.target.value)
  }

  function ChangeProgram(e) {
    SetProgram(e.target.innerHTML)
  }

  function ChangeDegree(e) {
    SetDegree(e.target.innerHTML)
  }

  function SubmitForm(e) {
    var data = {
      name: name,
      roll: roll,
      year: year,
      mobile: mobile,
      father: father,
      mother: mother,
      program: program,
      degree: degree
    };
    console.log(data)
  }

  return (
    <div className="App">
      <div className='SurveyForm'>
        <div id='header'>
          <h1>Survey Form</h1>
        </div>
        <div className='Questions'>
          <div className='q'>
            <p>Enter Name</p>
            <input type='text' onChange={ChangeName} value={name}></input>
          </div>
          <div className='q'>
            <p>Enter Enrollment Number</p>
            <input type='text' onChange={ChangeRoll} value={roll}></input>
          </div>
          <div className='q'>
            <p>Degree Pursuing </p>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
              {degree}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={ChangeDegree}>BTech</a></li>
              <li><a className="dropdown-item" href="#" onClick={ChangeDegree}>MTech</a></li>
              <li><a className="dropdown-item" href="#" onClick={ChangeDegree}>PHD</a></li>
            </ul>
          </div>
          <div className='q'>
            <p>Program</p>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
               {program}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={ChangeProgram}>CSE</a></li>
                <li><a className="dropdown-item" href="#" onClick={ChangeProgram}>ECE</a></li>
                <li><a className="dropdown-item" href="#" onClick={ChangeProgram}>EEE</a></li>
              </ul>
            </div>
          </div>
          <div className='q'>
            <p>Admission Year</p>
            <input type='number' onChange={ChangeYear} value={year} min={1958} max={2003} placeholder='YYYY'></input>
          </div>
          <div className='q'>
            <p>Mobile Number</p>
            <input type='text' onChange={ChangeMobile} value={mobile}></input>
          </div>
          <div className='q'>
            <p>Father Name</p>
            <input type='text' onChange={ChangeFather} value={father}></input>
          </div>
          <div className='q'>
            <p>Mother Name</p>
            <input type='text' onChange={ChangeMother} value={mother}></input>
          </div>
          <div className='submit'>
            <button onClick={SubmitForm}>Submit Survey</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
