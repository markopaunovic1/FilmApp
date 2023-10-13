import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import AllMovies from './Components/AllMovies';
import OneMovie from './Components/OneMovie';
import Checkout from './Components/Checkout';
import Kundkorg from './Components/Kundkorg';
import TestApi from './Components/TestApi';

function App() {
  return (
    <div>
      <TestApi />
      {/*<header>
        <Navbar title='Front page' />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/allmovies' element={<AllMovies />}></Route>
          <Route path='/allmovies/:onemovie' element={<OneMovie />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/kundkorg' element={<Kundkorg />}></Route>
        </Routes>
  </main>*/}
    </div>
  );
}

export default App;
