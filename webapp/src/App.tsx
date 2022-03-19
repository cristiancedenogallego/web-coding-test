import './App.css'

import React, { useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import KnownFilters from './components/KnownFilters';
import UsersTable from './components/UsersTable';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
	<KnownFilters />
	<UsersTable />
      </div>
    </ApolloProvider>
  )
}

export default App
