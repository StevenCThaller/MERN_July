import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Characters",
      url: "https://swapi.py4e.com/api/people/?page=2",
      selected: true
    },
    {
      title: "Planets",
      url: "https://swapi.py4e.com/api/planets",
      selected: false
    },
    {
      title: "Starships",
      url: "https://swapi.py4e.com/api/starships",
      selected: false
    }
  ])
  return (
    <div>
      <Tabs tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;
