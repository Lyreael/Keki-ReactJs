// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import Nav from './Components/Nav/Nav';
import NavBs from './Components/Navbar/NavBs';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"np
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      {/*<Nav />*/}
      <NavBs />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
