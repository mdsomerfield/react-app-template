import React from 'react';

import css from './Logo.scss';

const Logo = () => (
  <h1 className={css.titleContainer}>
    <a className={css.titleText} href="/">
      Trubble
    </a>
  </h1>
)

export default Logo;
