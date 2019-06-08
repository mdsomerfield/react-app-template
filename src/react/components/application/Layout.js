import React from 'react';
import { connect } from 'react-redux';

import { operations, constants, selectors } from '@redux/application/index';

import Header from '@react/components/application/Header';
import css from './Layout.scss';

const mapStateToProps = (state) => ({
  applications: state.application.enabledApplications,
  showAccountMenu: selectors.showMenu(state.application.menus, constants.Menus.Account)
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    toggleMenu: (menuId) => dispatch(operations.toggleMenu(menuId)),
    goToApplication: (appId) => dispatch(operations.goToApplication(appId)),
  },
  accountOptions: [
    { id: "logout", text: "Logout", onClick: () => { /* TODO - implement auth */ } }
  ]
});

const ApplicationLayout = ({
  applications,
  showAccountMenu,
  actions,
  accountOptions,
  children
}) => (
  <div className={css.container}>
    <Header 
      applications={applications} 
      actions={actions} 
      showAccountMenu={showAccountMenu} 
      accountOptions={accountOptions} 
    />
    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationLayout);