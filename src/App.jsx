import React from 'react';
import {
  Button,
  HeroImage,
  Timer,
  Title,
} from './components';
import './App.css';

const App = () => (
  <main className="app">
    <HeroImage />
    <Title cashValue={10}/>
    <Timer />
    <Button />
  </main>
);

export default App;
