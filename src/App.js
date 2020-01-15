import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Branch from './components/Branch';
import Header from "./components/layout/header";
import Login from "./components/accounts/login";
import Register from "./components/accounts/register";
import PrivateRoute from "./components/common/PrivateRoute";
import { Provider } from 'react-redux';
import store from "./store";
import { loadUser } from './actions/auth';
import AuthProvider from "./context/authprovider";

    class App extends Component {
      componentDidMount() {
      store.dispatch(loadUser());
      };

      render(){
        return(
        <AuthProvider>
          <Provider store={store}>
            <Router>
              <Header/>
                <Switch>
                  <PrivateRoute exact path="/branch" component={Branch}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/register" component={Register}/>
                </Switch>
            </Router>
          </Provider>
        </AuthProvider>
      );
      }
    }

    export default App;