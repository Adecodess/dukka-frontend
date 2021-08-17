import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import AboutEmployees from './pages/AboutEmployees';
import EmployeeProfile from './components/employeeprofile/EmployeeProfile';

import Error from './pages/Error';

// import Navbar component
import Navbar from './components/Navbar';
import Form from './components/createemployee/Form';

function App() {
  return (
    <Router>
      <Navbar component={Home} />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route component={Form} />
        <Route path="/aboutemployees" component={AboutEmployees} />
        <Route
          path="/employeeprofile/:id"
          children={<EmployeeProfile />}></Route>
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
