
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const[mode,setMode]=useState(true);

  const darkMode={
    backgroundColor:'black',
    color:'white'
  }

  const lightMode={
    backgroundColor:'white',
    color:'black'
  }
  return (
    <> 
        <div style={mode?lightMode:darkMode}>
            <button onClick={()=>setMode(!mode)}>{mode?"Dark Mode":"Light Mode"}</button>
        
     <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
     </Router>
     </div>
    </>
  );
}

export default App;
