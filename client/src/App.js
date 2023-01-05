import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Activities from './components/Activities/Activities';
import CountryDetail from './CountryDetail/CountryDetail';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <NavBar />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/home/activities">
        <Activities />
      </Route>
      <Route exact path="/home/country/:id">
        <CountryDetail />
      </Route>
      
    </div>
  );
}

export default App;
