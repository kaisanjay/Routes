` import { BrowserRouter , Route, Switch } from "react-router-dom"; `

```
<Switch>      
        
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error}/> 
</Switch> 
 
```


