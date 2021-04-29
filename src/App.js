import Home from './Pages/Home/Home';
import AllPostsOfUser from './Pages/AllPostsOfUser/AllPostsOfUser';
import UserProfile from './Pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import ThemeProvider from './Context/theme-context';



function App() {

  const name = "DONE";

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/user" component={UserProfile}/>
            <Route exact path="/posts" component={AllPostsOfUser}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
