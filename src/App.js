import React, { Component } from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
       /*this BrowserRouter is a wrapper Component
       that we can wrap all our route inside our application this BrowserRouter acts a wrapper div */

      <BrowserRouter > 
        <div>      
        
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
