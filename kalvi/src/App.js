// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// we are using destructuring to grab the library prop from the props object
// Instead of using props and then props.library, we can use {library}
// We are reaching into the props object and grabbing the library property
// I don't like this. Do I really need to use this destructuring?
// It is more confusing. I would rather see props.library

const people = ["Data", "Deanne", "Spock"];
console.log(people[0]);
// Array destracturing
// We are assigning a variable name based on the position in the array. This is apparently useful...
const [data, deanne, spock] = people;
console.log(spock);
console.log(deanne);
console.log(data);

function App({library}) {
  // useState is a hook that allows us to use state in a functional component
  // useState returns an array with two elements
  // The first element is the current state
  // The second element is a function that allows us to update the state
  // We are using array destructuring to grab the two elements from the array
  // Apparently, useState is no longer necessary with the latest version of React
  const [place, setPlanet] = useState("Earth");
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Welcome to {place}</h1>
        <button onClick={() => setPlanet("Mars")}>Move to Mars</button>
        <button onClick={() => setPlanet("Earth")}>Move to Earth</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning {library} with Kalvi
        </a>
      </header>
    </div>
  );
}

export default App;
