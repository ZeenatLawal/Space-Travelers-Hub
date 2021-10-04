import './styles/App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getReservation from './Pages/GetReservation';
import { setReservation } from './redux/rockets/rockets';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await getReservation();
    dispatch(setReservation(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Rockets />
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
