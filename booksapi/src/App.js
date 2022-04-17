import './App.css';
import React from "react";
import Main from './book';
import Login from './login';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom"


function App() {
  return(
  <>
    <Router>
     <Login />
     <sign_up />
      <Switch>
        <Route  path= "/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
