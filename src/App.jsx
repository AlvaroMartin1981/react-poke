import React, { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [pokeName, setPokeName] = useState('')
  const [pokeData, setPokeData] = useState([])
 

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => response.json())
      .then(data => setPokeData([data]));
  }, [pokeName]);
  
  const handleNameChange = (e) => {
    setPokeName(e.target.value);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    };

  return (
  <>
  <div>
    <h1>Pokemon search</h1>
    <form onSubmit={handleSubmit} className='search-bar'>
      <label htmlFor='name'> Nombre </label>
      <input type="text" name="name" id="name" placeholder="Enter Pokemon Name..." onChange={handleNameChange}/>
      <button type="submit"> Buscar Pokemon </button>
    </form>
  </div>
  <div className="card">
    
      {pokeData.map((pokemon) =>(
      <div key={pokemon.id}>
        <h1>{pokemon.name}</h1>

      {/*<img src= {pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>*/}
      </div>))}
   
  </div>
  </>
  )
};

export default App;
