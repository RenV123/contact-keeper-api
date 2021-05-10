import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>
          <i className={`${icon} mx-3`}></i>
          {title}
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='mx-5'>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='/about'>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'ContactKeeper',
  icon: 'bi bi-person-square',
};

export default Navbar;
