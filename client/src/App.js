import React from 'react';
import AppNavBar from "./components/appnavbar";
import ShoppingList from './components/shoppingList';
import ItemModal from './components/itemmodal'
import {Container} from 'reactstrap'

//redux//
import { Provider } from 'react-redux';
import store from './Store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (

    <Provider store={store}>
      <h1>Test</h1>
    <div className="App">
    <AppNavBar />
    <Container>
    <ItemModal />
    <ShoppingList />
    </Container>
    </div>
    </Provider>
  );
}

export default App;
