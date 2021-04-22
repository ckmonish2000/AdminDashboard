import React from 'react';
import {useQuery} from "@apollo/client"
import {getRestaurantDetails} from "./services/queries"
import Tes from "./components/tes"

export const AdminContext=React.createContext()

function App() {
  const restDetails=useQuery(getRestaurantDetails)
  return (
    <AdminContext.Provider value={{
      rest:restDetails,
      hello:"mk"
    }}>
    <div className="App">
     <Tes/>
    </div>
    </AdminContext.Provider>
  );
}

export default App;
