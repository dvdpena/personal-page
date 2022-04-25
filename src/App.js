import { useState } from 'react';
import './App.css';
import Header from './App.module.css'
import Details from './components/details/details';
import NavBar from './components/nav_bar/nav_bar';
import { HOME } from './res/strings/en';
import {pageContext} from './utils/nav_context'


function App() {
  const [page, setPage] = useState(HOME);
  return (
  <>
    <div className="App">
      <pageContext.Provider value={{page, setPage}}>
        <div className='NavBar'><NavBar/></div>
        <div className='Details'><Details/></div>
        
      </pageContext.Provider>
      
    </div>
  </>
  );
}


export default App;
