import logo from './logo.svg';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import User from './Components/User/User';
import Add from './Components/Add/Add';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/user" component={User}/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
