import { message } from "antd";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("token");
  if (token) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else {
    message.error("Please Login With Valid Credentials.");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
