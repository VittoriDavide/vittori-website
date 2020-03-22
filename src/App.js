import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{flexDirection: "column", alignItems: 'center', display: "flex", marginBottom: 50}}>
          <p className="App-bio" >hi, i'm david vittori a passionate and creative mobile developer based in italy.
            i'm looking always for something cool and i love to help startups get an awesome app. <br/> <br/> just in case drop me a line.</p>

          <div style={{flexDirection: "row", justifyContent: "space-between"}}>
            <a
                className="App-link"
                href="https://github.com/VittoriDavide"
                target="_blank"
                rel="noopener noreferrer"
            >
              Github
            </a>
            <a
                className="App-link"
                href="https://www.linkedin.com/in/vittori/"
                target="_blank"
                rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
                className="App-link"
                href="mailto:me@vittoridavid.com"
                target="_blank"
                rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
          </div>
        </header>
      </div>
  );
}

export default App;
