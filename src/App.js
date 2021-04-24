import React from "react";
import { Route, Switch } from "react-router";
import DashBoard from "./components/DashBoard/DashBoard";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Login from "./components/login/Login";
import Staffs from "./components/Staff/Staffs";
import { useQuery, useMutation } from "@apollo/client";
import { getRoles, getPermissions } from "./services/queries";
import Role from "./components/roles/Roles.js";
export const AdminContext = React.createContext();

function App() {
  let Roles = useQuery(getRoles);
  let Permissions = useQuery(getPermissions);
  return (
    <AdminContext.Provider
      value={{
        Roles,
        Permissions,
      }}
    >
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" exact component={DashBoard} />
          <ProtectedRoute path="/roles" exact component={Role} />
          <ProtectedRoute path="/staff" component={Staffs} />
        </Switch>
      </main>
    </AdminContext.Provider>
  );
}

export default App;
