import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: '1',
        name: 'Pyotr Ilyich Tchaikovsky',
        email: 'pyotr.tchaikovsky@gmail.com',
        phone: '000-000-0001',
        type: 'personal',
      },
      {
        _id: '2',
        name: 'Richard Wagner',
        email: 'richardwagner@gmail.com',
        phone: '000-000-0002',
        type: 'personal',
      },
      {
        _id: '3',
        name: 'Amadeus Mozart',
        email: 'mozart.amadeus@wolfgang.com',
        phone: '000-000-0003',
        type: 'professional',
      },
      {
        _id: '4',
        name: 'Ludwig van Beethoven',
        email: 'lud.van.beats@hoven.com',
        phone: '000-000-0004',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  // Delete Contact
  // Set Current Contact
  // Clear Current Contact
  // Update Contact
  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
