import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [food, setFood] = useState("biryani");

  return ( 
    <div className='App'>
      <AppContext.Provider value={{food, setFood}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Does not exist</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;