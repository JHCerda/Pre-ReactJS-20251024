
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <> 
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/detail/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </div>
    </BrowserRouter>
    <div>
    <Footer/>
    </div>
    </>
  )
}

export default App
