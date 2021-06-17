import fs from 'fs'; //testing
import express from 'express';
import mongoose from 'mongoose';
import InformationModal from './models/Information.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('this is datagrokr assignment version 1');
});

app.post('/dbs', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const number = req.body.number;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const state = req.body.state;
  const postCode = req.body.postCode;
  const cardNumber = req.body.cardNumber;
  const salary = req.body.salary;
  const email = req.body.email;

  const information = new InformationModal({
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
  });
  try {
    await information.save();
    res.send('Good Work data inserted');
  } catch (err) {
    console.log(err);
  }
});

app.post('/local', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const number = req.body.number;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const state = req.body.state;
  const postCode = req.body.postCode;
  const cardNumber = req.body.cardNumber;
  const salary = req.body.salary;
  const email = req.body.email;

  const myName = {
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
  const data = JSON.stringify(myName);

  fs.writeFile('./contactDetails.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.');
  });
});
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(port, () => console.log(`server running on port: ${port}`));
