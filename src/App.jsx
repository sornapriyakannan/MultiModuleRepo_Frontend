import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Todo from './Pages/Todo';

import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';

const App=()=>{
  return(
    <div>

      <Router>

        <div>
          <Navbar/>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/todo" element={<Todo />}/>
          

          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App