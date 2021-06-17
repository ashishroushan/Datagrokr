import React from 'react';
import { useState } from 'react';
import './ContactDetails.css';
import validator from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToggleButton.css';
import SavingData from './SavingData';

const ContactDetails = () => {
  const [storageType, setStorageType] = useState('CloudStorage');
  
  // console.log(storageType);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
 const [state, setState] = useState('');
 const [postCode, setPostCode] = useState('');
 const [cardNumber, setCardNumber] = useState('');
 const [salary, setSalary] = useState('');
 const [id, setId] = useState(false);
 const [email, setEmail] = useState('');
 const [emailError, setEmailError] = useState(false);
  const validateEmail = (e) => {
    setEmail(e.target.value);
    
    if (validator.isEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  console.log(emailError);
  
  
  let details = {
    firstName: firstName,
    lastName: lastName,
    number: number,
    streetAddress: streetAddress,
    city: city,
    state: state,
    postCode: postCode,
    cardNumber: cardNumber,
    salary: salary,
    email: email,
  };


  const valA = (e) => {
    setStorageType(e.target.value);
  };
  // console.log(firstName);
  const addToList = () => {
    setId(!id);

    
  };
  console.log(id);
  return (
    <div className="App">
      <h1>Information Form</h1>
      <form className="wrapper" onSubmit={e=>e.preventDefault()}>
        <div className="wrapper-2">
          <label>First Name*</label>
          <input
            className="input-box"
            type="text"
            required
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div className="wrapper-2 lname">
          <label>Last Name*</label>
          <input
            className="input-box"
            type="text"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }
          }
          required
          />
        </div>
        <div className="wrapper-2">
          <label>Mobile number*</label>
          <input
            className="input-box"
            type="number"
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2 ">
          <label>Street Address</label>
          <input
            className="input-box"
            type="text"
            onChange={(e) => {
              setStreetAddress(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2">
          <label>City</label>
          <input
            className="input-box"
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2 state">
          <label>State</label>
          <input
            className="input-box"
            type="text"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2">
          <label>Post Code</label>
          <input
            className="input-box"
            type="number"
            onChange={(e) => {
              setPostCode(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2">
          <label>Account Number</label>
          <input
            className="input-box "
            type="number"
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2 salary">
          <label>Yearly Salary</label>
          <input
            className="input-box "
            type="number"
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
        </div>
        <div className="wrapper-2 exp">
          <label className="">Email*</label>
          <input
            className="input-box "
            type="text"
            required
            onChange={(e) => validateEmail(e)}
          />
          {emailError &&  <span className="email-error">invalid</span>}
        </div>

        <label className="Storage">Storage Type</label>
        <select onChange={valA}>
          <option value="CloudStorage">Cloud Server</option>
          <option value="LocalStorage">Local Storage</option>
        </select>

        <button onClick={addToList}>Add</button>
      </form>
      <SavingData details={details} type={storageType} id={id} />
    </div>
  );
};

export default ContactDetails;
