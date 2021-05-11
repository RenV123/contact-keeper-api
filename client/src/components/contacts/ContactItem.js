import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrentContact, clearCurrentContact } =
    contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    clearCurrentContact();
    deleteContact(_id);
  };

  return (
    <div className='card bg-light m-3'>
      <div className='card-body'>
        <h4 className='card-title text-start'>
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'fs-6 badge rounded-pill ' +
              (type === 'professional' ? 'bg-success' : 'bg-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h4>
        <ul style={{ listStyle: 'none' }}>
          {email && (
            <li>
              <i className='bi bi-envelope-open me-2' />
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='bi bi-telephone me-2' />
              {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className='btn btn-dark btn-sm mx-1'
            onClick={() => setCurrentContact(contact)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm mx-1' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
