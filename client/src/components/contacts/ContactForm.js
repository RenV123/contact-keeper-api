import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrentContact, currentContact } =
    contactContext;

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, currentContact]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentContact === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    //Clear the fields
    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };

  return (
    <form
      className='card bg-light m-3 p-3 needs-validation'
      onSubmit={onSubmit}
    >
      <h2 className='text-primary'>
        {currentContact ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <div className='mt-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          className='form-control'
          type='text'
          name='name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div className='mt-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          className='form-control'
          type='email'
          name='email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div className='mt-3'>
        <label htmlFor='phone' className='form-label'>
          Phone
        </label>
        <input
          className='form-control'
          type='text'
          name='phone'
          value={phone}
          onChange={onChange}
        />
      </div>
      <div className='mt-3'>
        <h5>Contact Type:</h5>
        <input
          type='radio'
          className='btn-check'
          name='type'
          value='professional'
          id='btn-professional'
          autoComplete='off'
          checked={type === 'professional'}
          onChange={onChange}
        />
        <label
          className='btn btn-outline-success my-3 me-3'
          htmlFor='btn-professional'
        >
          Professional
        </label>

        <input
          type='radio'
          className='btn-check me-3'
          name='type'
          value='personal'
          id='btn-personal'
          autoComplete='off'
          checked={type === 'personal'}
          onChange={onChange}
        />
        <label className='btn btn-outline-primary  my-3' htmlFor='btn-personal'>
          Personal
        </label>
      </div>
      <div className='d-grid gap-2 mt-3'>
        <input
          type='submit'
          value={currentContact ? 'Edit Contact' : 'Add Contact'}
          className='btn btn-primary'
        />
      </div>
      {currentContact && (
        <div className='d-grid gap-2 mt-3'>
          <button className='btn btn-light' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
