import { NavLink } from 'react-router-dom';
import './Header.scss';
import { LocaleContext } from '../../App';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  // Context
  const setLocale = React.useContext(LocaleContext);

  return (
    <nav className='nav-bar'>
      <h2>
        <FormattedMessage id='header:logo' />
      </h2>
      <div>
        <NavLink className='nav-bar__link' to='/'>
          <FormattedMessage id='header:home' />
        </NavLink>
        <NavLink className='nav-bar__link' to='/user'>
          <FormattedMessage id='header:users' />
        </NavLink>
        <NavLink className='nav-bar__link' to='/createuser'>
          <FormattedMessage id='header:createUser' />
        </NavLink>
      </div>
      <div className='lang-btn'>
        <button className='lang-btn__nav-btn' onClick={() => setLocale('es-ES')}>
          ES
        </button>
        <button className='lang-btn__nav-btn' onClick={() => setLocale('en-EN')}>
          EN
        </button>
      </div>
    </nav>
  );
};

export default Header;
