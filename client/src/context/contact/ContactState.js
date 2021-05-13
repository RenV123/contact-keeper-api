import React, { useReducer } from 'react';
import axios from 'axios';
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
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    currentContact: null,
    filteredContacts: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  /**
   * Add Contact to state
   * @param {Object} contact
   */
  const addContact = async (contact) => {
    try {
      const response = await axios.post('api/contacts', contact);

      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.message });
    }
  };

  /**
   * Update Contact to state
   * @param {Object} contact
   */
  const updateContact = async (contact) => {
    try {
      const response = await axios.put(`api/contacts/${contact._id}`, contact);

      dispatch({ type: UPDATE_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.message });
    }
  };

  /**
   * Delete Contact from state
   * @param {String} id of the contact
   */
  const deleteContact = async (id) => {
    try {
      await axios.delete(`api/contacts/${id}`);

      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.message });
    }
  };

  /**
   * Get Contacts
   */
  const getContacts = async () => {
    try {
      const response = await axios.get('api/contacts');

      dispatch({ type: GET_CONTACTS, payload: response.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.message });
    }
  };

  /**
   * Clear Contacts
   */
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
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
        error: state.error,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
