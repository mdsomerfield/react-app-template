import React from 'react';

import Logo from '@react/components/header/Logo';
import SearchTool from '@react/components/header/SearchTool';
import UtilitiesMenu from '@react/components/header/UtilitiesMenu';

import css from './Header.scss';

const Header = ({
  actions,
  showAccountMenu,
  accountOptions
}) => (
  <div className={css.container}>
    <div className={css.logo}>
      <Logo />
    </div>
    <div className={css.searchTool}>
      <SearchTool />
    </div>
    <div className={css.utilities}>
      <UtilitiesMenu 
        showAccountMenu={showAccountMenu} 
        actions={actions}
        accountOptions={accountOptions} 
      />
    </div>
  </div>
);

export default Header;