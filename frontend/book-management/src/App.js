import React from 'react'
import Signup from './pages/signUp/signUp'
import Signin from './pages/signIn/signIn'
import Books from './pages/books/books'
import Addbook from './pages/addBook/addBook'
import BookStatus from './pages/bookStatus/bookStatus'
import TrackBook from './pages/bookStatus/buyerBookStatus';
import "./components-builtin/@vuexy/rippleButton/RippleButton";
import setAuthorizationToken from "./utils/authorization/authorization";
import store from "./store/index";
import PrivateRoute from './components/PrivateRoute';
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
import './App.css';

function App() {

    React.useEffect(() => {
      if (localStorage.token) {
        setAuthorizationToken(localStorage.token)
      }
    }, []);

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute component={Signup} publicValue ={true} userRole={"both"}  path="/" exact />
          <PrivateRoute component={Books} publicValue ={false} userRole={"both"} path="/books" exact/>
          <PrivateRoute component={Signin} publicValue ={true} userRole={"both"} path="/sign-in" exact/>
          <PrivateRoute component={Addbook} publicValue ={false} userRole={"seller"} path="/add-book" exact/>
          <PrivateRoute component={BookStatus} publicValue ={false} userRole={"seller"} path="/book-status" exact/>
          <PrivateRoute component={TrackBook} publicValue ={false} userRole={"both"} path="/book-track" exact/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
