import React, { Component } from 'react';
import { BrowserRouter , Route } from "react-router-dom";

const NewRoute = () => {
  return(
    <div>
      <p>
        NewRoute
      </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
       /*this BrowserRouter is a wrapper Component
       that we can wrap all our route inside our application this BrowserRouter acts a wrapper div */

      <BrowserRouter > 
        <div>      
          <Route path="/new" component={NewRoute} />>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
