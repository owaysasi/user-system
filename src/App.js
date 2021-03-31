import logo from './logo.svg';
import Home from './Pages/Home/Home';
import AllPostsOfUser from './Pages/AllPostsOfUser/AllPostsOfUser';
import UserProfile from './Pages/UserProfile/UserProfile';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';



function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/user" component={UserProfile}/>
          <Route exact path="/posts" component={AllPostsOfUser}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
