import { Typography } from "@mui/material";
import { PokeWorld } from "../components/PokeWorld";

export const Fire = ({ pokemonLoaded, typePokemon }) => {
  return (
    <div>
      <Typography>Tipo de Pokemon Fire</Typography>
      <PokeWorld pokemonLoaded={pokemonLoaded} typePokemon={typePokemon} />
    </div>
  );
};
