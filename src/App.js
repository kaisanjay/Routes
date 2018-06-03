import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
       /*this BrowserRouter is a wrapper Component
       that we can wrap all our route inside our application this BrowserRouter acts a wrapper div */

      <BrowserRouter > 
        <Switch>      
        
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
