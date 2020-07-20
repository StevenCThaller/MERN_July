import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import AllUsers from './components/AllUsers'; 
import CreateUser from './components/CreateUser'; 
import EditUser from './components/EditUser';
import OneUser from './components/OneUser';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">All Users</Link> |&nbsp;
        <Link to="/create">Create User</Link>
      </nav>
      <Router>
        <AllUsers path="/" />
        <CreateUser path="/create" />
        <EditUser path="/users/:id/edit" />
        <OneUser path="/users/:id" />
      </Router>
    </div>
  );
}

export default App;
