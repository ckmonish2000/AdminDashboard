import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




let link = new HttpLink({ uri:"https://peaceful-sea-13348.herokuapp.com/graphql/" })

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6Iis5MTc4OTI1MDk3NjMiLCJleHAiOjE2MTkwOTE3ODcsIm9yaWdJYXQiOjE2MTkwOTE0ODd9.wH1_rNhE_hlR1N6GjVKprFKM3yi5mRj5lF9Vsv0fOBo",
    }
  });

  return forward(operation);
})



let client=new ApolloClient({link:concat(authMiddleware,link),cache:new InMemoryCache()})

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);


