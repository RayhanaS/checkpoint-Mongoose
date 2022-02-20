
import './App.css';
import Home from './Components/Home';
import Card from './Components/Card';
import Add from './Components/Add' ;
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={Home}/>
      <Route path="/contact" element={Card}/>
      <Route  path="/Addcontact" element={Add}/>
      </Routes>
    
    </div>
  );
}

export default App;
