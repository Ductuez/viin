import React from "react";
import {  Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, authenticated, ...rest }) {
  if (!authenticated) {
       return <Redirect to="/login" />
    }
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated  ? <Component {...props} /> : <></>
      }
    />
  );
}

export function PublicRoute({ component: Component, authenticated, ...rest }) {
  console.log(authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated  ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
