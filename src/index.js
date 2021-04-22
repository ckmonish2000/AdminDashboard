import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";

let link = new HttpLink({
  uri: "https://peaceful-sea-13348.herokuapp.com/graphql/",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  let token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : null,
    },
  });

  return forward(operation);
});

let client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
