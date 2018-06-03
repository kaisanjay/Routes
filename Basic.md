# Routes


> npm install --save react-router-dom

> import { BrowserRouter , Route } from "react-router-dom";

>  <BrowserRouter >  <BrowserRouter /> 
```
This BrowserRouter is a wrapper Component that we can wrap all our route inside
our application this BrowserRouter acts a wrapper div
```
  
> 
```
      <BrowserRouter > 
        <div>      
        
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </BrowserRouter>
      
 ```
