
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= 'rgb(24, 38, 58)';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode = {mode} toggleMode={toggleMode} />
    <Routes>
      <Route path='/' element={<Textform heading= "Enter the Text here:" mode = {mode}/>}></Route>
      <Route path='/home' element={<Textform heading= "Enter the Text here:" mode = {mode}/>}></Route>
      <Route path='/about' element={<About mode = {mode} />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
