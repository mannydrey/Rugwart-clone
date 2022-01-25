import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Getstarted from './Getstarted';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path= '/'>
            <Home />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Getstarted'>
            <Getstarted />
          </Route>
        </Switch>
      </Router>
      
      
        
    </div>
  );
}

export default App;
