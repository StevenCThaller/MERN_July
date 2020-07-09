import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyListItem from './components/MyListItem';
import MyHeader from './components/MyHeader';
import MyList from './components/MyList';
import MyTable from './components/MyTable';
import TableRow from './components/TableRow';

function App() {
  const list = [
    {
      name: "Billiam Tages",
      age: 23,
      isAwful: false
    },
    {
      name: "Joe Dirt",
      age: 34,
      isAwful: false
    },
    {
      name: "Karen McMindYourOwnBusiness",
      age: 45,
      isAwful: true
    },
    {
      name: "Ronald Grump",
      age: 75,
      isAwful: true
    }
  ]

  return (
    <div>
      <MyHeader title="Who's Dope and Who's Not?!">
        <a href="https://google.com">Google</a> | <a href="https://espn.com">ESPN</a>
      </MyHeader>
      <MyList title="Whos Hot Whos Not">
        <MyListItem name={ "Billiam Tages" } age={ 23 } isAwful={ false } />
        <MyListItem name={ "Joe Dirt" } age={ 34 } isAwful={ false } />
        <MyListItem name={ "Karen McMindYourOwnBusiness" } age={ 45 } isAwful={ true } />
        <MyListItem name={ "Ronald Grump" } age={ 74 } isAwful={ true } />
        <MyListItem name={ "Michael Choi" } age={ 40 } isAwful={ false } />
      </MyList>

      <MyTable>
        <TableRow name={ "Billiam Tages" } age={ 23 } isAwful={ false } />
        <TableRow name={ "Joe Dirt" } age={ 34 } isAwful={ false } />
        <TableRow name={ "Karen McMindYourOwnBusiness" } age={ 45 } isAwful={ true } />
        <TableRow name={ "Ronald Grump" } age={ 74 } isAwful={ true } />
        <TableRow name={ "Michael Choi" } age={ 40 } isAwful={ false } />
      </MyTable>
    </div>
  );
}

export default App;
