import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts && contacts.length === 0 && !loading) {
    return (
      <div className='m-3'>
        <h4>Please add a contact</h4>
      </div>
    );
  }

  let contactToShow = filteredContacts ?? contacts;
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {contactToShow.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames='card'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
