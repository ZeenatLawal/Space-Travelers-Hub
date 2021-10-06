import './styles/App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getReservation from './components/GetRockets';
import { setRockets } from './redux/rockets/rockets';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import store from './redux/configureStore';
import Missions from './components/Missions';
import { loadMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, [dispatch]);

  useEffect(async () => {
    const data = await getReservation();
    store.dispatch(setRockets(data));
  }, []);

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
