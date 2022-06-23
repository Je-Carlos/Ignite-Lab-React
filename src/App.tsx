import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import "../src/styles/global.css";
import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";
import { Header } from "./components/Header";
import { Event } from "./pages/Event";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
