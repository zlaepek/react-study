import { useEffect, useState } from "react";
import Propypes from "prop-types";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Building001 from "./routes/Building001";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        <Route path="/building001">
          <Building001 />
        </Route>

      </Switch>
    </Router>
  );
  
}

export default App;
