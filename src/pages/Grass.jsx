import { Typography } from "@mui/material";
import { PokeWorld } from "../components/PokeWorld";

export const Grass = ({ pokemonLoaded, typePokemon }) => {
  return (
    <div>
      <Typography>Tipo de Pokemon Grass</Typography>
      <PokeWorld pokemonLoaded={pokemonLoaded} typePokemon={typePokemon} />
    </div>
  );
};
