import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts } = contactContext;

  if (contacts.length === 0) {
    return (
      <div className='m-3'>
        <h4>Please add a contact</h4>
      </div>
    );
  }

  let contactToShow = filteredContacts ?? contacts;
  return (
    <Fragment>
      <TransitionGroup>
        {contactToShow.map((contact) => (
          <CSSTransition key={contact._id} timeout={500} classNames='card'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
