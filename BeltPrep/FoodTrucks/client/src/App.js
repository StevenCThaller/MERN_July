import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import AllTrucks from './components/AllTrucks';
import OneTruck from './components/OneTruck';
import TruckForm from './components/TruckForm';

function App() {
  return (
    <div className="App">
      <nav className="text-center">
          <h1 className="col-sm-12">Food Trucks</h1>
        <Link to="/">Dashboard</Link> |&nbsp;
        <Link to="/truck/new">New Truck</Link>
      </nav>
      <Router>
        <AllTrucks path="/" default/>
        <OneTruck path="/truck/:id"/>
        <TruckForm path="/truck/new" action="create"/>
        <TruckForm path="/truck/:id/edit" action="edit"/>
      </Router>
    </div>
  );
}

export default App;
