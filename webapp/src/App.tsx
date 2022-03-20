import './App.css'

import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import KnownFilters from './components/KnownFilters';
import UsersTable from './components/UsersTable';
import {GlobalProvider} from './state/GlobalProvider';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <GlobalProvider>
      <ApolloProvider client={client}>
	<div className="header-decoration"></div>
	<div className="card container my-5 rounded">
	  <KnownFilters />
	  <UsersTable />
	</div>
      </ApolloProvider>
    </GlobalProvider> 
    
  )
}

export default App
