import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TomatoForm from './components/TomatoForm';
import TomatoList from './components/TomatoList';

function App() {
  const [allTomatoes, setAllTomatoes] = useState([]);
  const [tomato, setTomato] = useState({
    size: "",
    shape: "",
    name: ""
  })


  // The commented sections are for having the individual
  // fields of our tomato as their own piece of state.
  
  // const [size, setSize] = useState("");
  // const [shape, setShape] = useState("");
  // const [name, setName] = useState("");

  const addTomato = () => {
    const [...currTomatoes] = allTomatoes;


    currTomatoes.push(tomato)

    // currTomatoes.push({
    //   size,
    //   shape,
    //   name
    // });

    setAllTomatoes(currTomatoes);
  }

  return (
    <div className="App">
      <div className="row">
        Welcome to TomatoBook
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="row">New Tomato</h2>
          <TomatoForm
            tomato={ tomato }
            setTomato={ setTomato }
            // size={ size }
            // shape={ shape }
            // name={ name }
            // newSize={ setSize }
            // newShape={ setShape }
            // newName={ setName }
            newSubmit={ addTomato }
          />
        </div>
        <div className="col-sm-6">
          <h2 className="row">All Tomatoes</h2>
          <TomatoList allMatoes={ allTomatoes }/>
        </div>
      </div>
    </div>
  );
}

export default App;
