import React from "react";
import { isSuperUser } from "../../services/queries";
import { useQuery } from "@apollo/client";
import Nav from "../Nav/Nav";
import { Spin, message } from "antd";
import { Redirect } from "react-router";
import "../../styles/Dashboard.css";

export default function DashBoard() {
  let isSuperorNot = useQuery(isSuperUser, {
    fetchPolicy: "no-cache",
  });

  if (typeof isSuperorNot.data === "undefined") {
    return (
      <div className="SpinnerDiv">
        <Spin size="large" style={{ width: "100%" }} />
      </div>
    );
  } else {
    if (isSuperorNot.data?.me?.isSuperuser) {
      return (
        <div>
          <Nav />
        </div>
      );
    } else {
      localStorage.removeItem("token");
      message.warning("Permission Denied");
      return <Redirect path="/login" />;
    }
  }
}
