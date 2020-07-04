import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import logo from './logo.svg';
import './App.css';

import { UserInfo } from './User';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      
      <UserInfo />
    </div>
  </ApolloProvider>
)

export default App;
