import { Typography } from "@mui/material";
import { PokeWorld } from "../components/PokeWorld";

export const Electric = ({ pokemonLoaded, typePokemon }) => {
  return (
    <div>
      <Typography>Tipo de Pokemon Electric</Typography>
      <PokeWorld pokemonLoaded={pokemonLoaded} typePokemon={typePokemon} />
    </div>
  );
};
