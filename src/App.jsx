import { Routes, Route, Link } from "react-router-dom";
import { Electric } from "./pages/Electric";
import { Water } from "./pages/Water";
import { Grass } from "./pages/Grass";
import { Fire } from "./pages/Fire";
import { useState } from "react";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [typePokemon, setTypePokemon] = useState(2);

  const pokemonLoaded = (data) => {
    setPokemon(data);
  };

  const handleTypePokemon = (idType) => {
    setTypePokemon(idType);
  };
  console.log(pokemon);
  return (
    <>
      <h1>Pokemon</h1>
      <nav className="menu">
        <Link to="/fire" onClick={() => handleTypePokemon(10)}>
          Fire
        </Link>
        <Link to="/water" onClick={() => handleTypePokemon(11)}>
          Water
        </Link>
        <Link to="/grass" onClick={() => handleTypePokemon(12)}>
          Grass
        </Link>
        <Link to="/electric" onClick={() => handleTypePokemon(13)}>
          Electric
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/fire"
          element={
            <Fire
              fire={10}
              pokemonLoaded={pokemonLoaded}
              typePokemon={typePokemon}
            />
          }
        />
        <Route
          path="/water"
          element={
            <Water
              water={11}
              pokemonLoaded={pokemonLoaded}
              typePokemon={typePokemon}
            />
          }
        />
        <Route
          path="/grass"
          element={
            <Grass
              grass={12}
              pokemonLoaded={pokemonLoaded}
              typePokemon={typePokemon}
            />
          }
        />
        <Route
          path="/electric"
          element={
            <Electric
              electric={13}
              pokemonLoaded={pokemonLoaded}
              typePokemon={typePokemon}
            />
          }
        />
      </Routes>
    </>
  );
};
