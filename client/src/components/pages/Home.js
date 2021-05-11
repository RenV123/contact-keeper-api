import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <ContactForm />
        </div>
        <div className='col'>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
