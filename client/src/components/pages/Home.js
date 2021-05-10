import React from 'react';
import Contacts from '../contacts/Contacts';
const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div class='col'>{/* Contact Form */}</div>
        <div class='col'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
