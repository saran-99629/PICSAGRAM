// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import {createBrowserHistory} from 'history';
import Activationpage from "./pages/Activationpage/Activationpage";
import Login from "./pages/Login/Login";
import Passwordreset from "./pages/Passwordreset/Passwordreset";
import Passwordresetconfirm from "./pages/Passwordresetconfirm/Passwordresetconfirm";
import {Provider} from 'react-redux';
import store from "./store";
const App = () => {
  const history=createBrowserHistory();
  return (
    
      <div>
        <Provider store={store}></Provider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activation' component={Activationpage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/passwordreset' component={Passwordreset} />
          <Route exact path='/passwordresetconfirm' component={Passwordresetconfirm} />

        </Switch>
        </Router>
      </div>
    
  );
}

export default App;
