import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filteredContacts } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filteredContacts === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form className='m-3'>
      <input
        className='form-control'
        ref={text}
        type='search'
        placeholder='Filter Contacts...'
        aria-label='Search'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
