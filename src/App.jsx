
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <> <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      {/* <Route path="/detail/:id" element={} /> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
