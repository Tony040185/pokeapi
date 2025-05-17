import { Routes, Route, Link } from "react-router-dom";
import { Electric } from "./components/Electric";
import { Water } from "./components/Water";
import { Grass } from "./components/Grass";
import { Fire } from "./components/Fire";
import { useState } from "react";
import { PokeWorld } from "./components/PokeWorld";



export const App = () => {

  const [pokemon, setPokemon] = useState({})
  

  const pokemonLoaded = (data) => {
    setPokemon(data)    
  }
  

  return (

    <>
      <PokeWorld pokemonLoaded={pokemonLoaded}/>
      <h1>Pokemon</h1>
      <nav className="menu">
        <Link to="/fire">Fire</Link>
        <Link to="/water">Water</Link>
        <Link to="/grass">Grass</Link>
        <Link to="/electric">Electric</Link>
      </nav>
      
      <Routes>
        <Route path="/fire" element={< Fire fire={10} />} />
        <Route path="/water" element={< Water water={11}/>} />
        <Route path="/grass" element={< Grass grass={12}/>} />
        <Route path="/electric" element={< Electric electric={13}/>} />        
      </Routes>
    </>
  )
}


