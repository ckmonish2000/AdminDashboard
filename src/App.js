import React from 'react';
import {useQuery} from "@apollo/client"
import {getPermissions,getRoles} from "./services/queries"


export const AdminContext=React.createContext()

function App() {
  let data=useQuery(getRoles)
  console.log(data.error);
  return (
    // <AdminContext.Provider value={{
      
    // }}>
    <div className="App">
      hdfbdhfh
    </div>
    // </AdminContext.Provider>
  );
}

export default App;
