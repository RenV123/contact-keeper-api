import React, { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';
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
    currentContact: null,
    filteredContacts: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  /**
   * Add Contact to state
   * @param {Object} contact
   */
  const addContact = (contact) => {
    contact._id = uuidV4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  /**
   * Update Contact to state
   * @param {Object} contact
   */
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  /**
   * Delete Contact from state
   * @param {String} id of the contact
   */
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  /**
   * Set Current Contact
   * @param {Object} contact
   */
  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  /**
   * Clear Current Contact
   */
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  /**
   * Filter Contacts
   * @param {String} text to filter on
   */
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  /**
   * Clear filter
   */
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
