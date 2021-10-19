import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import CityDetails from './components/city-details';
import Footers from './components/footers';


class App extends React.Component {

render(){
  
  return (
    <div className="App">
      <div className="main">
        <NavBar/>
        <div className="container">
          <CityDetails/>
        </div>
      </div>
      <Footers/>
    </div>
  );

  }
}

export default App;
