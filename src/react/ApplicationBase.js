import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthenticatedRoute from './AuthenticatedRoute';
import Dashboard from './pages/Dashboard';

function mapStateToProps(state) {
  return {
    auth: {
      initialised: true, // TODO - implement auth
      authenticated: true // TODO - implement auth
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      checkAuthentication: () => { /* TODO - implement auth */ }
    }
  };
}

class ApplicationBase extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.checkAuthentication();
  }

  render() {
    const { auth } = this.props;
    return (
      <React.Fragment>
        <AuthenticatedRoute exact {...auth} path={'/'} component={Dashboard} />
      </React.Fragment>  
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationBase)