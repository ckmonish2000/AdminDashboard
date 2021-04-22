import React from 'react';
import { Route, Switch } from 'react-router';
import DashBoard from "./components/DashBoard/DashBoard"
import ProtectedRoute from "./utils/ProtectedRoutes"
import Login from "./components/login/Login"

function App() {
  return (
 <main>
   <Switch>
     <Route path="/login" component={Login} />
     <ProtectedRoute path="/" exact component={DashBoard}/>
   </Switch>
 </main>
  );
}

export default App;
