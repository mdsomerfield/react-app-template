import React from "react";
import { Route, Redirect } from "react-router-dom";
import ApplicationLayout from './components/application/Layout';
import PluginLayout from './components/application/PluginLayout';

const AuthenticatedRoute = ({
  initialised, 
  authenticated,
  sidebar,
  component,
  ...props
}) => {

  if (!initialised) {
    return null;
  }

  const ComponentToRender = authenticated 
    ? () => (
      <ApplicationLayout>
        <PluginLayout
          Sidebar={sidebar}
          Content={component} />
      </ApplicationLayout>
    )
    : () => <Redirect to={"/login"} />  

  return (
    <Route {...props} component={ComponentToRender} />
  );
}
  
export default AuthenticatedRoute;