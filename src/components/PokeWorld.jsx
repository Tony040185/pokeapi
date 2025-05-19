import { useEffect, useState } from "react";

export const PokeWorld = ({ pokemonLoaded, typePokemon }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const resp = await fetch(
          `https://pokeapi.co/api/v2/type/${typePokemon}`
        );
        const { pokemon } = await resp.json();
        const firstTen = pokemon.slice(0, 5);
        console.log(firstTen);
        setPosts(firstTen);
        pokemonLoaded(firstTen);
      } catch (err) {
        console.log("no se pueden mostrar los pokemones... error", err);
      }
    };

    getPokemon();
  }, [typePokemon]);

  return (
    <div>
      <ul>
        {posts.map(({ pokemon }, i) => (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
