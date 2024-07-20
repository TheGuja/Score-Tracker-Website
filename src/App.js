import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavigationBar from './components/NavigationBar';
import Rankings from './components/Rankings'
import Home from './pages/Home'

function App() {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
