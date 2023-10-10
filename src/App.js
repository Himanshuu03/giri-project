import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import News from './pages/News';
import Transport from './pages/Transport';
import Clients from './pages/Client';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/client' element={<Clients/>}/>
      </Routes>
    </div>
  )
}

export default App;
