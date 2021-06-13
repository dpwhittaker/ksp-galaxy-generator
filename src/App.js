import React, {useState} from 'react';
import random from random-seed;
import './App.css';

function App() {
  const [seed, setSeed] = useState(0);
  const [age, setAge] = useState(2);
  const [size, setSize] = useState(50);
  const stars = {
    
  };
  const [LStars, setLStars] = useState(rand.intBetween());
  rand = random.create(seed);
  return (
    <div className="App">
      <label for="seed">Seed:</label>
      <input type="text" name="seed" value={seed} onChange={e => setSeed(e.target.value)}/>
      <label for="age">Age of the Galaxy:</label>
      <input type="numeric" name="age" value={age} onChange={e => setAge(e.target.value)}/>
      <label for="size">Size of the Galaxy (# of stars):</label>
      <input type="numeric" name="size" value={size} onChange={e => setSize(e.target.value)}/>
      <div>Seed: {seed}</div>
      <div>Age of Galaxy: {age}</div>

    </div>
  );
}

export default App;
