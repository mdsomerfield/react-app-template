import React, { Component } from 'react';
import AccountMenu from './AccountMenu';
import css from './UtilitiesMenu.scss';
import { constants } from '@redux/application/index';

class UtilitiesMenu extends Component {
  toggleAccountMenu() {
    const { actions } = this.props;
    actions.toggleMenu(constants.Menus.Account);
  }

  render() {
    const { showAccountMenu, accountOptions } = this.props;
    return (
      <React.Fragment>
        <div className={css.settingsContainer}>
          <button className={css.settingsLink} />
        </div>
        <div className={css.accountContainer}>
          <button className={css.accountLink} onClick={() => this.toggleAccountMenu()} />
          {
            showAccountMenu && (<AccountMenu options={accountOptions}/>)
          }      
        </div>
      </React.Fragment>
    )
  }
}

export default UtilitiesMenu;