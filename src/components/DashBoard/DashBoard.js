import React from "react";
import { getPermissions, getRoles } from "../../services/queries";
import { useQuery, useMutation } from "@apollo/client";
import Nav from "../Nav/Nav";

export const AdminContext = React.createContext();
export default function DashBoard() {
  let Roles = useQuery(getRoles);
  let Permissions = useQuery(getPermissions);
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
}
