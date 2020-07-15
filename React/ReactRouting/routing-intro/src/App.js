import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import CompOne from './components/CompOne';
import CompTwo from './components/CompTwo';
import Variable from './components/Variable';
import NotFound from './components/NotFound';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/comp1">Component 1</Link> |&nbsp;
        <Link to="/comp2">Component 2</Link> |&nbsp;
        <Link to="/person/Guest/idk">You</Link>
      </nav>
      <Router>
        <Landing path="/"/>
        <CompOne path="/comp1"/>
        <CompTwo path="/comp2"/>
        <Variable path="/person/:name/:age"/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
