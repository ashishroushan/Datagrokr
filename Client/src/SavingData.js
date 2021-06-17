import React, { useEffect } from 'react';
import axios from 'axios';

const SavingData = ({ details, type, id }) => {
  //console.log(type);
  useEffect(() => {
   
    if (type === 'CloudStorage' && details.firstName) {
      axios.post('http://localhost:3001/dbs', {
        firstName: details.firstName,
        lastName: details.lastName,
        number: details.number,
        streetAddress: details.streetAddress,
        city: details.city,
        state: details.state,
        postCode: details.postCode,
        cardNumber: details.cardNumber,
        salary: details.salary,
        email: details.email,
      });
      console.log("Saving on Cloud")
    }else if(type === 'LocalStorage' && details.firstName){
        axios.post('http://localhost:3001/local', {
        firstName: details.firstName,
        lastName: details.lastName,
        number: details.number,
        streetAddress: details.streetAddress,
        city: details.city,
        state: details.state,
        postCode: details.postCode,
        cardNumber: details.cardNumber,
        salary: details.salary,
        email: details.email,
      });
      console.log("Saving locally")
    }
    console.log(details.firstName);
  }, [id]);
  return <div></div>;
};

export default SavingData;
