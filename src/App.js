import React from 'react';
import './App.css';
import ProfileViewer from './profileViewer';
import Student from './componentss/student.js';
// import ProfileViewer from './profileViewer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { StarTwoTone } from '@material-ui/icons';

function App() {

  return (
    // <div className="App">
    // <ProfileViewer />
    // </div>
    <Router>
      <Switch>
        <Route path='/profileviewer'>
          <ProfileViewer />
        </Route>
        <Route  path='/student'>
          <Student />
        </Route>
      </Switch>
      </Router>
);
}

export default App; 

