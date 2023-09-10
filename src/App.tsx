import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandigPage from './Components/LandigPage';
import './Style/main.scss'; // Import your Sass file

function App() {
  return (
    <div className="App">
      <Header />
      <LandigPage />
    </div>
  );
}

export default App;
