import './styles/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/MyProfile">
            <MyProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
