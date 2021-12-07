import './App.css';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBs from './Components/Navbar/NavBs';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBs />
      <ItemListContainer />
      <ItemDetailContainer id={1} />
      <ItemCount />
    </div>
  );
}

export default App;
