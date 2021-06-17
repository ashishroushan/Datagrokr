// import { connect } from "mongoose";
import mongoose from 'mongoose';

const informationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  /* firstName: firstName,
  lastName: lastName,
  number: number,
  streetAddress: streetAddress,
  city: city,
  state: state,
  postCode: postCode,
  cardNumber:cardNumber,
  cvv:cvv,
  expireDate:expireDate,  */
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postCode: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

var information = mongoose.model('information', informationSchema);
export default information;
