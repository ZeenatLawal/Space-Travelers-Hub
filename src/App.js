import './styles/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/Missions">
            <Missions />
          </Route>
          <Route path="/MyProfile">
            <MyProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
