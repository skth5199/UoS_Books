import Signup from './pages/signUp/signUp'
import Signin from './pages/signIn/signIn'
import Books from './pages/books/books'
import Addbook from './pages/addBook/addBook'
import BookStatus from './pages/bookStatus/bookStatus'
import "./components-builtin/@vuexy/rippleButton/RippleButton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
         <Route path="/" exact component={Signup}/>
         <Route path="/sign-in" component={Signin}/>
         <Route path="/books" component={Books}/>
         <Route path="/add-book" component={Addbook}/>
         <Route path="/book-status" component={BookStatus}/>
         </Switch>
    </div>
    </Router>
  );
}

export default App;
