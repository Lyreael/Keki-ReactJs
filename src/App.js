import React from 'react';
import './App.scss';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBs from './components/navbar/NavBs';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBs />
          <Switch>
            <Route exact path="/home"> <ItemListContainer /> </Route>
            <Route path="/category/:categoryId"><ItemListContainer /></Route>
            <Route path="/detail/:paramsId"><ItemDetailContainer /></Route>
            <Route path="/count/:paramsId"><ItemCount /></Route>
          </Switch>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
