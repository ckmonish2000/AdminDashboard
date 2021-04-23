import { message } from "antd";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isSuperUser } from "../services/queries";
import { useQuery } from "@apollo/client";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isSuperorNot = useQuery(isSuperUser);
  let token = localStorage.getItem("token");
  isSuperorNot = isSuperorNot.data.me?.isSuperuser;
  console.log(isSuperorNot);
  if (token && isSuperorNot) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else {
    message.error("Please Login With Valid Credentials.");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
