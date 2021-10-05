import './styles/App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { loadMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, [dispatch]);

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
