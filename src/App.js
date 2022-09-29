import logo from "./logo.svg";
import "./App.css";

function MyHeader() {
  return <h2>What the fuck is this?</h2>;
}

function App() {
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
