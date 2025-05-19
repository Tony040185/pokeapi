import { Typography } from "@mui/material";
import { PokeWorld } from "../components/PokeWorld";

export const Water = ({ pokemonLoaded, typePokemon }) => {
  return (
    <div>
      <Typography>Tipo de Pokemon Water</Typography>
      <PokeWorld pokemonLoaded={pokemonLoaded} typePokemon={typePokemon} />
    </div>
  );
};
