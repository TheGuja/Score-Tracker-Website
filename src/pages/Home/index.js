import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavigationBar from '../../components/NavigationBar';
import Rankings from '../../components/Rankings'
import './index.css'
import HomeImage from '../../components/HomeImage';

function Home() {
  return (
    <div>
      <NavigationBar />
      <HomeImage />
      <h1>Latest Scores</h1>
      <div className="rankingsHome">
        <div>
          <h3>Percussion Independent World</h3>
          <Rankings />
        </div>
        <div>
          <h3>Percussion Independent Open</h3>
          <Rankings />
        </div>
        <div>
          <h3>Percussion Independent A</h3>
          <Rankings />
        </div>
      </div>
      <div className="rankingsHome">
        <div>
          <h3>Percussion Scholastic World</h3>
          <Rankings />
        </div>
        <div>
          <h3>Percussion Scholastic Open</h3>
          <Rankings />
        </div>
        <div>
          <h3>Percussion Scholastic A</h3>
          <Rankings />
        </div>
      </div>
    </div>
  );
}

export default Home;
