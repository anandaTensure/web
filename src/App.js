import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello 
        {process.env.direct}
        from env file
        {process.env.REACT_APP_FIREBASE_API_KEY}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {process.env.NODE_ENV}
        </a>
      </header>
    </div>
  );
}

export default App;
