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
import Home from './componentshm/components/home.js';
// import { StarTwoTone } from '@material-ui/icons';

function App() {

  return (
    <div className="App">
    <Home />
    </div>
 
);
}

export default App; 

{/* 
  const [selectedStudent, setselectedStudent] = useState([]);

  <Router>
<Switch>
  <Route path='/profileviewer'>
    <ProfileViewer selectedStudent={selectedStudent}/>
  </Route>
  <Route  path='/student'>
    <Student setSelectedStudent={setSelectedStudent}/>
  </Route>
</Switch>
</Router> */}