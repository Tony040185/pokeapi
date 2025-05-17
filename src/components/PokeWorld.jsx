import { useEffect, useState } from "react";

export const PokeWorld = ({pokemonLoaded}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/type/4");
        const { pokemon } = await resp.json();        
        const firstTen = pokemon.slice(0, 10);
        console.log(firstTen)
        setPosts(firstTen);
        pokemonLoaded(firstTen)        
      } catch (err) {
        console.log("no se pueden mostrar los pokemones... error");
      }
    };

    getPokemon();
    
  }, []);

  return (
    <div>
      {/* <h3>Pokémon tipo "Flying"</h3>
      <ul>
        {posts.map(({ pokemon }, i) => (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
