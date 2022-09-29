import logo from "./logo.svg";
import "./App.css";

function MyHeader(props) {
  return <h2>{props.title}</h2>;
}

function App(props) {
  return (
    <div className="App">
      <MyHeader title={props.title} />
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
