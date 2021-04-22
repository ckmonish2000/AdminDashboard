import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client"

let client=new ApolloClient({uri:"https://peaceful-sea-13348.herokuapp.com/graphql/",cache:new InMemoryCache()})

ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);


