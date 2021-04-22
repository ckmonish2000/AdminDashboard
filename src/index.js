import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink,ApolloLink} from "@apollo/client"


let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6Iis5MTc4OTI1MDk3NjMiLCJleHAiOjE2MTkwNzY5NTYsIm9yaWdJYXQiOjE2MTkwNzY2NTZ9.akECfuTeL7ofnYh7Elqal3AwU8i2TdHE1Md0vBlBU4M"

const authLink = new ApolloLink((operation, forward) => {

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});


let link = createHttpLink({
  uri:"https://peaceful-sea-13348.herokuapp.com/graphql/"
})
let client=new ApolloClient({link:authLink.concat(link),cache:new InMemoryCache()})

ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);


