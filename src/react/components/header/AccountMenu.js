import React from 'react';
import css from './AccountMenu.scss';

const AccountMenu = ({
  options
}) => (
  <div className={css.container}>
    <ul className={css.list}>
      {
        options.map((option) => (
          <li key={option.id} className={css.listItem}>
            <button className={css.button} onClick={option.onClick}>
              {option.text}
            </button>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AccountMenu;