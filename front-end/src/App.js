import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home'
import Home2 from './routes/Home2';
import HomeMenu from './layout/HomeMenu';

function App() {
  return (

    <Router>
     
        
        
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/home2" component={Home2} />
          {/* <Route exact path="/home2" component={Home2} /> */}
          {/* <Route exact path="/FunctionalFrame" component={FunctionalFrame} />
          <Route exact path="/AWSLambda" component={AWSLambda} />
          <Route path="/about/:myname" component={About}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/login" component={Login}/> 
            <Route path="/dialog" component={Dialog}/>
            <Route path="/Popup" component={Popup}/>
            <Route path="/Table" component={Table}/>
            <Route path="/MainTable" component={MainTable}/> 
            <Route path="/MinList" component={MinList}/> 
            <Route component={NoMatch}/> */}
        </Switch>
     
    </Router>
  );
}

export default App;
