import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Products} from './components/Products'
import {NavBar} from './components/NavBar'
import './App.css';

function App() {
  return (
    <div>
    <nav>
    <NavBar/>
    </nav>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='products/:id' element={<Products/>}/>
    </Routes>
    </div>
  );
}

export default App;
