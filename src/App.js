import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import CityDetails from './components/city-details';

function App() {
  return (
    <div className="App">
      <div className="main">
        <NavBar/>
        <div className="container">
          <CityDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
