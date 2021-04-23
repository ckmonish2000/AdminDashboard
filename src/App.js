import React from "react";
import { Route, Switch } from "react-router";
import DashBoard from "./components/DashBoard/DashBoard";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Login from "./components/login/Login";
import Staffs from "./components/Staff/Staffs";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" exact component={DashBoard} />
        <ProtectedRoute path="/staff" component={Staffs} />
      </Switch>
    </main>
  );
}

export default App;
