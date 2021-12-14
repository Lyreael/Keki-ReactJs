import './App.scss';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBs from './Components/Navbar/NavBs';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBs />
      <Switch>
        <Route exact path="/"> <ItemListContainer /> </Route>
        <Route path="/category/:categoryId"><ItemListContainer /></Route>
        <Route path="/detail/:paramsId"><ItemDetailContainer /></Route>
        <Route path="/count/:paramsId"><ItemCount /></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
