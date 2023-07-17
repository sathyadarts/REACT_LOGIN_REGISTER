import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Forgetpwd from './components/Forgetpwd';
import Forgetpwd2 from './components/Forgetpwd2';
import Registerfrom from './components/Registerfrom';
import Home from './components/Home';



function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Registerfrom' element={<Registerfrom />} />
      <Route path='/Forgetpwd' element={<Forgetpwd/>}/>
      <Route path='/Forgetpwd2' element={<Forgetpwd2/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
