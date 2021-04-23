import React from "react";
import { getPermissions, getRoles, isSuperUser } from "../../services/queries";
import { useQuery, useMutation } from "@apollo/client";
import Nav from "../Nav/Nav";
import { Spin, Space, message } from "antd";
import { Redirect } from "react-router";
import "../../styles/Dashboard.css";
export const AdminContext = React.createContext();
export default function DashBoard() {
  let Roles = useQuery(getRoles);
  let isSuperorNot = useQuery(isSuperUser, {
    fetchPolicy: "no-cache",
  });
  let Permissions = useQuery(getPermissions);

  if (typeof isSuperorNot.data === "undefined") {
    return (
      <div className="SpinnerDiv">
        <Spin size="large" style={{ width: "100%" }} />
      </div>
    );
  } else {
    if (isSuperorNot.data?.me?.isSuperuser) {
      return (
        <AdminContext.Provider
          value={{
            Roles,
            Permissions,
          }}
        >
          <div>
            <Nav />
          </div>
        </AdminContext.Provider>
      );
    } else {
      localStorage.removeItem("token");
      message.warning("Permission Denied");
      return <Redirect path="/login" />;
    }
  }
}
