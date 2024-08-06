import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar'
import RankingList from './components/RankingList';
import { useState, useEffect } from "react"

function App() {
  const [psw, setPSW] = useState([]);
  const [pso, setPSO] = useState([]);
  const [psa, setPSA] = useState([]);

  const [piw, setPIW] = useState([]);
  const [pio, setPIO] = useState([]);
  const [pia, setPIA] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=psw')
    .then(response => response.json())
    .then(psw => setPSW(psw))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=pso')
    .then(response => response.json())
    .then(pso => setPSO(pso))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=psa')
    .then(response => response.json())
    .then(psa => setPSA(psa))
    .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=piw')
    .then(response => response.json())
    .then(piw => setPIW(piw))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=pio')
    .then(response => response.json())
    .then(pio => setPIO(pio))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/get-data?division=pia')
    .then(response => response.json())
    .then(pia => setPIA(pia))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <NavigationBar/>
      <div className='all-rankings'>
        <div className='independent-ranking-container'>
          <div id='piw-h3-ranking'>
            <h3>Percussion Independent World</h3>
            <RankingList id='piw' data={piw}/>
          </div>
          <br/>
          <div id='pio-h3-ranking'>
            <h3>Percussion Independent Open</h3>
            <RankingList id='pio' data={pio}/>
          </div>
          <br/>
          <div id='pia-h3-ranking'>
            <h3>Percussion Independent A</h3>
            <RankingList id='pia' data={pia}/>
          </div>
        </div>
        <div className='scholastic-ranking-container'>
          <div id='psw-h3-ranking'>
            <h3>Percussion Scholastic World</h3>
            <RankingList id="psw" data={psw}/>
          </div>
          <br/>
          <div id='pso-h3-ranking'>
            <h3>Percussion Scholastic Open</h3>
            <RankingList id="pso" data={pso}/>
          </div>
          <br/>
          <div id='psa-h3-ranking'>
            <h3>Percussion Scholastic A</h3>
            <RankingList id='psa' data={psa}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
