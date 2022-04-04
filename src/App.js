
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBorad/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';
import Reviewser from './components/Reviewser/Reviewser';

function App() {
  return (
    <div >
    <Header></Header>   
 
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviewser></Reviewser>}></Route>
       <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>

    </Routes>
    </div>
  );
}

export default App;
